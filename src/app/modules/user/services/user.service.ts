import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { config } from '../../../shared/config/app.config';
import { HttpHeaders } from '@angular/common/http';

// Models
import { IAuthUser } from '../../../models/auth-user';

// Services
import { ApiCallService } from '../../../services/api-call.service';
import { SessionManagerService } from '../../../services/session-manager.service';
import { Flash } from './flash.service';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../../../services/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public hideLoader = new BehaviorSubject(true);
  public number = new BehaviorSubject(123);
  public isLogin$ = false;
  constructor(
    private http: ApiCallService,
    private router: Router,
    private session: SessionManagerService,
    private flash: Flash,
    private authorizeService:AuthorizeService
  ) {
    this.number.next(1000);
  }

  /**
   * Function to call api sign up user
   * @param form Form group of sigup form
   */
  signUpUser(form: FormGroup) {
    if (form.valid) {
      this.http
        .invoke({
          method: config.apiMethods.post,
          path: config.apiUrls.signUp,
          body: form.value
        })
        .subscribe(
          data => {
            this.hideLoader.next(true);
            this.router.navigateByUrl(
              `${config.routePaths['emailVerificationAlert']}/${form.value.email}`
            );
          },
          error => {
            this.hideLoader.next(true);            
            if (error.error) {
              form.controls['email'].setErrors({ alreadyExit: true });
            }
          }
        );
    }
  }
  /**
   * Function to resend verification mail again
   * @param email email id of user
   */
  resendVerificationMail(email) {
    if (email) {
      this.http
        .invoke({
          method: config.apiMethods.post,
          path: config.apiUrls.resendVerificationMail,
          body: { email: email }
        })
        .subscribe(
          data => {
            this.hideLoader.next(false);
            alert(data.message);
            //this.flash.showSuccess(data.message);
          },
          error => {
            this.hideLoader.next(false);
          }
        );
    }
  }
  /**
   * Function to call api sign in user
   * @param form Form group of sigin form
   */
  signInUser(form: FormGroup) {
    if (form.valid) {
      this.http
        .invoke({
          method: config.apiMethods.post,
          path: config.apiUrls.login,
          body: form.value
        })
        .subscribe(
          (data: IAuthUser) => {
            this.hideLoader.next(true);
            if (data.user.status) {
              this.session.createSession(data);
              this.authorizeService.isLoginSubject.next(true)
              this.router.navigateByUrl(config.routePaths['profile']);
              this.number.next(1000);
            } else {
              this.router.navigateByUrl(
                `${config.routePaths.emailVerificationAlert}/${form.value.email}`
              );
            }
          },
          error => {
            this.hideLoader.next(false);
            this.flash.showError(error.error.validation_fail);
          }
        );
    }
  }
  /**
   * Function to call api forgot password
   * @param form Form group of forgotPassword form
   */
  forgotPassword(form: FormGroup) {
    if (form.valid) {
      this.http
        .invoke({
          method: config.apiMethods.post,
          path: config.apiUrls.forgotPassword,
          body: form.value
        })
        .subscribe(
          data => {
            form.reset();
            this.hideLoader.next(true);
            alert(config.messages.resetPassword);
            //this.flash.showSuccess(config.messages.resetPassword);
          },
          error => {
            this.hideLoader.next(true);
            if (error.error) {
              form.controls['email'].setErrors({ doesNotExists: true });
            }
          }
        );
    }
  }
  /**
   * Function to call api to reset password of user
   * @param form Form group of reset form
   * @param token reset token from verifiction link
   */
  resetPasswordUser(form: FormGroup, token: string) {
    if (form.valid) {
      this.http
        .invoke({
          method: config.apiMethods.post,
          path: `${config.apiUrls.resetPassword}${token}`,
          body: form.value
        })
        .subscribe(
          data => {
            form.reset();
            this.hideLoader.next(true);
            this.router.navigateByUrl(
              config.routePaths['resetPasswordVerification']
            );
          },
          error => {
            if (error.error) {
              this.hideLoader.next(true);
              alert(error.error.message);
              this.flash.showError(error.error.message);
            }
          }
        );
    }
  }
  /**
   * Function to logout
   * @param empty
   */
  public logout() {
    this.http
      .invoke({
        method: config.apiMethods.get,
        path: config.apiUrls.logout
      })
      .subscribe(
        res => {
          this.session.removeCookies();
          this.router.navigateByUrl(
            `${config.routePaths.rootUrl}${config.routePaths.signin}`
          );
        },
        error => {
          this.flash.showError(error.message);
        }
      );
  }
  /**
   * Function for getting profile detail
   * @param empty
   */
  public me() {
    this.number.next(1000);
    return this.http
      .invoke({
        method: config.apiMethods.get,
        path: config.apiUrls.USER_ME
      });
  }
  /**
   * Function for update profile
   * @param empty
   */
  public updateProfile(form) {
    if (form.valid) {
      this.http
        .invoke({
          method: config.apiMethods.put,
          path: config.apiUrls.USER_ME,
          body: form.value
        })
        .subscribe(
          (data: IAuthUser) => {
            console.log(data);
            if (data.status) {
              this.flash.showSuccess(data.message);
              this.router.navigateByUrl(config.routePaths['profile']);
            } else {
              this.flash.showError('Error to update a profile, Please try later');
            }
          },
          error => {
            this.flash.showError(error.error.validation_fail);
          }
        );
    }
  }
}
