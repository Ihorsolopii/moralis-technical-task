import { expect } from '@playwright/test';
import { step } from '../../../../support/reporters/step';
import { AppComponent } from '../../../AppComponent';

export class CreateNodeModal extends AppComponent {
  private readonly root = this.page.getByTestId('mui-modal');

  public readonly selectProtocolDropdown = this.root.getByLabel('select-protoccol');

  public readonly selectNetworkDropdown = this.root.getByLabel('select-network');

  public readonly createNodeButton = this.root.getByRole('button', { name: 'Create Node' });

  @step('Wait until the Create new node modal displayed')
  async expectLoaded(): Promise<void> {
    await expect(this.selectProtocolDropdown).toBeVisible();
    await expect(this.selectNetworkDropdown).toBeVisible();
    await expect(this.createNodeButton).toBeVisible();
  }

  @step('Create new Node')
  async createNode(protocol: string, network: string): Promise<void> {
    await this.selectProtocolDropdown.selectOption(protocol);
    await this.selectNetworkDropdown.selectOption(network);
    await this.createNodeButton.click();
  }
}
