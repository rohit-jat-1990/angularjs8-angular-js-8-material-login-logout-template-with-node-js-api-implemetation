import { Component } from '@angular/core';
import { UserService } from '../app/modules/user/services/user.service';
import { AuthorizeService } from './services/authorize.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-login-template';
  public isLogin$;
  isLoggedIn$: Observable<boolean>;

  public obj: any;

  constructor(private userService: UserService, private authorizeService: AuthorizeService) {
    this.isLoggedIn$ = this.isLoggedInHere();
  }

  ngOnInit() { }
  /**
  *
  * @returns {Observable<T>}
  */
 isLoggedInHere(): Observable<boolean> {
    return this.authorizeService.isLoginSubject.asObservable();
  }

  logout() {
    this.userService.logout();
    this.authorizeService.isLoginSubject.next(false);
  }
}
