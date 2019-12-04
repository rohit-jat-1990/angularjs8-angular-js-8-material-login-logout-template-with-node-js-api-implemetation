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
export class UploadService {
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
   * Function to call api for uploading image
   * @param form Form group of upload form
   */
  uploadImage(file) {
    if (file.name) {
      let input = new FormData();
      input.append('profile_image', file);
      this.http
        .invoke({
          method: config.apiMethods.post,
          path: config.apiUrls.FILE_UPLOAD_IN_DB,
          body: input
        })
        .subscribe(
          data => {
            this.router.navigateByUrl(config.routePaths['profile']);
          },
          error => {
            this.flash.showError(error.error.validation_fail);
          }
        );
    }
  }
  
}
