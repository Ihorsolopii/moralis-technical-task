import { cleanEnv, url, str } from 'envalid';

export const env = cleanEnv(process.env, {
  FRONTEND_URL: url(),
  BACKEND_URL: url(),
  USER_EMAIL: str(),
  USER_PASSWORD: str(),
});
