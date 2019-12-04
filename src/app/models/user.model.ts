import { IRole } from './role';
export interface IUser {
    id: number;
    name: string;
    email: string;
    avatar: string;
    company_id: 0;
    email_verified_at: string;
    user_type: string;
    roles?: IRole[];
    permissions: Object;
    hasAnyPermission?: boolean;
    status: boolean;
}
