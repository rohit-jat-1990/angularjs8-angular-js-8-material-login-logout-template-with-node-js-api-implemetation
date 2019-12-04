import { Injectable } from '@angular/core';

// Models
import { IAuthUser } from '../models/auth-user';
import { IUser } from '../models/user.model';
// Services
import { CookieeManagerService } from '../services/cookiee-manager.service';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {
  
  constructor(private cookieManager: CookieeManagerService) { }

  public createSession = (authUser: IAuthUser) => {
    const sessionObj = {
      'token': authUser.token
    };
    this.cookieManager.setCookie('session', JSON.stringify(sessionObj));
    this.cookieManager.setCookie('currentUser', JSON.stringify(authUser.user));
  }

  public isSession = () => {
    const session = this.cookieManager.getCookie('session');
    return (session && JSON.parse(session)['token']);
  }

  public getToken = () => {
    const session = this.cookieManager.getCookie('session');
    return (session && JSON.parse(session)['token'] ? JSON.parse(session)['token'] : '');
  }
  public isToken = () => {
    const session = this.cookieManager.getCookie('session');
    return (session && JSON.parse(session)['token'] ? true : false);
  }
  public setToken = (token: string) => {
    const sessionObj = {
      'token': token
    };
    this.cookieManager.setCookie('session', JSON.stringify(sessionObj));
  }

  public authHeader() {
    const token = this.getToken();
    return `Bearer ${token}`;
  }

  public getCurrentUser(): IUser {
    const userString = this.cookieManager.getCookie('currentUser');
    const user = (userString && JSON.parse(userString) ? JSON.parse(userString) : undefined);
    return user;
  }

  public removeCookies() {
    this.cookieManager.clearAllCookies();
  }
}
