import { expect } from '@playwright/test';
import { step } from '../../support/reporters/step';
import { AppPage } from '../AppPage';

export class HomePage extends AppPage {
  public readonly pagePath = '/';

  private readonly header = this.page.getByTestId('test-typography').first();

  @step('Expect that Header is visible and Welcome text displays')
  async expectLoaded(): Promise<void> {
    await Promise.all([await expect(this.header, 'Expected header to be visible').toContainText(`Welcome`)]);
  }
}
