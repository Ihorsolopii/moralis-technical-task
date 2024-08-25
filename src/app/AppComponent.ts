import { step } from '../support/reporters/step';
import { PageHolder } from './PageHolder';

export abstract class AppComponent extends PageHolder {
  abstract expectLoaded(message?: string): Promise<void>;

  @step()
  async isLoaded(): Promise<boolean> {
    try {
      await this.expectLoaded();
      return true;
    } catch {
      return false;
    }
  }
}
