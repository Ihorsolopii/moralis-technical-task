import { test } from '@playwright/test';
import { Application } from '../app';
import { env } from '../env';

export const baseFixture = test.extend<{ app: Application }>({
  app: async ({ browser, page }, use) => {
    test.info().annotations.push({
      type: 'Browser',
      description: `${browser.browserType().name()} ${browser.version()}`,
    });

    const app = new Application(page);
    await use(app);
  },
});

interface DefaultUserOption {
  defaultUser: {
    email: string;
    password: string;
  };
}

export const loggedUserFixture = baseFixture.extend<DefaultUserOption & { app: Application }>({
  defaultUser: [
    {
      email: env.USER_EMAIL,
      password: env.USER_PASSWORD,
    },
    { option: true },
  ],

  app: async ({ app, defaultUser }, use) => {
    await app.headlessLogin(defaultUser);
    await app.home.open();

    await use(app);
  },
});
