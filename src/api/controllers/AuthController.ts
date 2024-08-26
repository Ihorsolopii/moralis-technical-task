import { RequestHolder } from '../RequestHolder';
import { step } from '../../support/reporters/step';
import { IUser } from '../../support/interfaces/IUser';

export class AuthController extends RequestHolder {
  @step('Login user')
  async login(data: IUser): Promise<{ access_token: string }> {
    const response = await this.request.post(`${this.apiURL}/auth/login`, {
      data: { ...data, keepmeLoggedin: true },
      timeout: 10_000,
    });

    return response.json() as Promise<{ access_token: string }>;
  }
}
