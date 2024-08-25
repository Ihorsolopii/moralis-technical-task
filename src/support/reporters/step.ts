/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { test } from '@playwright/test';

/**
 * Decorator that wraps a function with a Playwright test step.
 * Used for reporting purposes.
 *
 * @example
 ```
    import { step } from './step_decorator';
    class MyTestClass {
        @step('optional step name')
        async myTestFunction() {
            // Test code goes here
        }
    }
 ```
 */
export function step<This, Args extends any[], Return>(message?: string) {
  return function actualDecorator(
    target: (this: This, ...args: Args) => Promise<Return>,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>,
  ) {
    function replacementMethod(this: any, ...args: Args) {
      const name = message ?? `${this.constructor.name}.${context.name as string}`;

      return test.step(name, async () => target.call(this, ...args), { box: true });
    }

    return replacementMethod;
  };
}

/**
 * Decorator function for wrapping POM methods in a test.step.
 *
 * Use it without a step name `@step()`.
 *
 * Or with a step name `@step("Search something")`.
 *
 * @param stepName - The name of the test step.
 * @returns A decorator function that can be used to decorate test methods.
 */
// export function step1(stepName?: string) {
//   return function decorator(target: Function, context: ClassMethodDecoratorContext) {
//     return function replacementMethod(...args: any) {
//       const name = `${stepName || (context.name as string)} (${this.name})`;
//       return test.step(name, async () => {
//         return await target.call(this, ...args);
//       });
//     };
//   };
// }
