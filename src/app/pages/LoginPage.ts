import { expect } from '@playwright/test';
import { step } from '../../support/reporters/step';
import { AppPage } from '../AppPage';
import { IUser } from '../../support/interfaces/IUser';

export class LoginPage extends AppPage {
  public readonly pagePath = '/login';

  private readonly emailInput = this.page.getByLabel('Email');

  private readonly passwordInput = this.page.getByLabel('Password');

  private readonly loginButton = this.page.getByRole('button', { name: 'Log in' });

  @step('Wait until Login form elements are displayed')
  async expectLoaded(): Promise<void> {
    await Promise.all([
      await expect(this.emailInput, 'Expected email input to be visible').toBeVisible(),
      await expect(this.passwordInput, 'Expected password input to be visible').toBeVisible(),
      await expect(this.loginButton, 'Expected Login button to be visible').toBeVisible(),
    ]);
  }

  @step('Login the user')
  async loginUser(user: IUser): Promise<void> {
    const { email, password } = user;

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }
}
