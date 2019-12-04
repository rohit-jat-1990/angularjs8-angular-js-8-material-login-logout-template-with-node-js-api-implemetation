import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CookieeManagerService {

  constructor(private cookieService: CookieService) { }
  private cookieOptions: any = {
    'domain': window.location.hostname,
    'secure': false,
    'path': '/',
    'expires': new Date(new Date().setTime(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)))
  };

  public setCookie = (key: string, value: string) => {
    this.cookieService.set(key, value, this.cookieOptions.expires,
      this.cookieOptions.path, this.cookieOptions.domain, this.cookieOptions.secure);
  }

  public getCookie = (key: string) => this.cookieService.get(key);

  public clearCookie = (key: string) => {
    this.cookieService.delete(key);
  }

  public clearAllCookies = () => {
    this.cookieService.deleteAll(this.cookieOptions.path, this.cookieOptions.domain);
  }
}
