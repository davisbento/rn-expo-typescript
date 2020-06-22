import { IUser } from '~/interfaces/user';

import { get } from './api';

export const getProfile = () => get<IUser>('user');
