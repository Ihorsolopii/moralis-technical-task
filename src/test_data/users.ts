import { env } from '../env';
import { IUser } from '../support/interfaces/IUser';

export const users: Record<string, IUser> = {
  defaultUser: {
    email: env.USER_EMAIL,
    password: env.USER_PASSWORD,
  },
};
