import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { config } from '../shared/config/app.config';

// Services
import { SessionManagerService } from './session-manager.service';
import { AuthorizeService } from './authorize.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private routePaths = config.routePaths;
  private publicRoutes: any = [
    this.routePaths.signin,
    this.routePaths.signup,
    this.routePaths.forgotPassword,
    this.routePaths.resetPassword,
  ];
  private isPublicRoute = (route) => this.publicRoutes.indexOf(route) > -1;

  constructor(
    private sessionManager: SessionManagerService,
    private router: Router,
    private authorizeService: AuthorizeService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentPath = (state.url).split('/')[1].split('?')[0];
      if (this.sessionManager.isSession()) {
        this.authorizeService.autauthorizeRoute(state.url);
        if (this.isPublicRoute(currentPath)) {
          this.router.navigateByUrl(this.routePaths.profile);
          return false;
        }
        return true;
    } else {
      if (!this.isPublicRoute(currentPath)) {
        this.router.navigateByUrl(this.routePaths.signin);
        return false;
      }
      return true;
    }
  }
}
