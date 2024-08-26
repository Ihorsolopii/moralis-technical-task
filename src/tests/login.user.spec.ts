import { baseFixture as test } from '../fixtures';
import { users } from '../test_data/users';

const { defaultUser } = users;

test.describe('Login user', () => {
  test('Login user with correct credentials', async ({ app }) => {
    await app.login.open();
    await app.login.loginUser(defaultUser);

    await app.home.expectLoaded();
  });
});
