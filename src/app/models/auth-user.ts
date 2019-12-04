import { IUser } from './user.model';

export interface IAuthUser {
    token: string;
    user: IUser;
    message: string;
    status: string;
    code: number;
}
