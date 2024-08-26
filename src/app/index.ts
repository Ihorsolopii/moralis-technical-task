import { test } from '@playwright/test';
import { PageHolder } from './PageHolder';
import { LoginPage } from './pages/LoginPage';
import { API } from '../api';
import { IUser } from '../support/interfaces/IUser';
import { NodesPage } from './pages/nodes/NodesPage';
import { HomePage } from './pages/HomePage';

export class Application extends PageHolder {
  public readonly api: API = new API(this.page.request);

  public readonly login: LoginPage = new LoginPage(this.page);

  public readonly home: HomePage = new HomePage(this.page);

  public readonly nodesPage: NodesPage = new NodesPage(this.page);

  async headlessLogin(data: IUser): Promise<void> {
    const { access_token: token } = await this.api.auth.login(data);
    await this.setTokenToLocalStorage(token);

    await test.info().attach('Credentials used for headless login', {
      body: JSON.stringify(data, null, 4),
      contentType: 'application/json',
    });
  }

  async setTokenToLocalStorage(token: string): Promise<void> {
    await this.page.goto('/', { waitUntil: 'commit' });
    await this.page.evaluate(
      _token =>
        window.localStorage.setItem(
          'authStore',
          `{"state":{"hasMarketingSubscribe":true,"hasTermsAndConditions":true,"token":"${_token}","keepLoggedIn":true},"version":0}`,
        ),
      token,
    );
  }
}
