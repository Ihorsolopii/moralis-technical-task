import { expect } from '@playwright/test';
import { step } from '../../../support/reporters/step';
import { AppPage } from '../../AppPage';
import { CreateNodeModal } from './components/CreateNodeModal';

export class NodesPage extends AppPage {
  public readonly pagePath = '/nodes';

  public readonly createNodeButton = this.page.getByRole('button', { name: 'Create a New Node' });

  public readonly createNodeModal: CreateNodeModal = new CreateNodeModal(this.page);

  @step('Wait until the Create node page displayed')
  async expectLoaded(): Promise<void> {
    await expect(this.createNodeButton).toBeVisible();
  }

  @step('Open the Create new Node modal')
  async openCreateNewNodeModal(): Promise<void> {
    await this.createNodeButton.click();
  }
}
