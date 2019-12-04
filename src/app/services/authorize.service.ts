import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../shared/config/app.config';

// Services
import { SessionManagerService } from '../services/session-manager.service';

// Models
import { IUser } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
    isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    user: IUser;

    constructor(
        private sessionManager: SessionManagerService,
        private router: Router
    ) { }
    /**
     * if we have token the user is loggedIn
     * @returns {boolean}
     */
    private hasToken() : boolean {
        return this.sessionManager.isToken();
    }
        
    public authorize(permission: string) {
        this.user = this.sessionManager.getCurrentUser();
        if (this.user.user_type !== undefined) {
            if (this.user.user_type === config.userType.admin) {
                return true;
            } else if (permission !== undefined && permission !== '') {
                const allowedPermissions = this.user.permissions;
                if (allowedPermissions.hasOwnProperty(permission) && allowedPermissions[permission]) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            this.isLoginSubject.next(true);
            return true;
        }
    }

    public autauthorizeRoute(route: string) {
        const routeObject = config.routesConstants.find(x => x.url === route);
        const permission = routeObject ? routeObject.permission : '';
        if (!this.authorize(permission)) {
            this.router.navigateByUrl(`/errors/un-authorized?referrer=${route}`);
        }
    }
}
