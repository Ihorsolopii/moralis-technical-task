import { baseFixture as test } from '../fixtures';
import { users } from '../test_data/users';

const { defaultUser } = users;

test.describe('Create Node', () => {
  test.beforeEach(async ({ app }) => {
    await app.login.open();
    await app.login.loginUser(defaultUser);
    await app.home.expectLoaded();
  });

  test('Create new Node', async ({ app }) => {
    await app.nodesPage.open();
    await app.nodesPage.expectLoaded();

    await app.nodesPage.openCreateNewNodeModal();

    await app.nodesPage.createNodeModal.expectLoaded();
    await app.nodesPage.createNodeModal.createNode('Ethereum', 'Mainnet');
  });
});
