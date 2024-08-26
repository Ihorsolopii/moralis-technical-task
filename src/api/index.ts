import { AuthController } from './controllers/AuthController';
import { RequestHolder } from './RequestHolder';

export class API extends RequestHolder {
  public readonly auth = new AuthController(this.request);
}
