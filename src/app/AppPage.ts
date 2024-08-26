import { expect } from '@playwright/test';
import { AppComponent } from './AppComponent';
import { step } from '../support/reporters/step';

export abstract class AppPage extends AppComponent {
  /**
   * Path to the page can be relative to the baseUrl defined in playwright.config.ts
   * or absolute (on your own risk)
   */
  public abstract pagePath: string;

  /**
   * Opens the page in the browser and expectLoaded should pass
   */
  @step('Open Login page and Accept all cookies')
  async open(path?: string): Promise<void> {
    await this.page.goto(path ?? this.pagePath);
    await this.expectLoaded();

    await this.page.addLocatorHandler(this.page.locator('#cookiescript_injected'), async () => {
      await this.page.getByRole('button', { name: 'Accept all' }).click();
    });
  }
}
