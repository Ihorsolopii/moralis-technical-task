import type { APIRequestContext } from '@playwright/test';
import { env } from '../env';

export abstract class RequestHolder {
  protected readonly apiURL = env.BACKEND_URL;

  constructor(protected request: APIRequestContext) {}
}
