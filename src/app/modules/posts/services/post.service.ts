import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../../../shared/config/app.config';

// Services
import { ApiCallService } from '../../../services/api-call.service';
import { Flash } from '../../user/services/flash.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public isLogin$ = false;
  constructor(
    private http: ApiCallService,
    private router: Router,    
    private flash: Flash
  ) { }
  /**
   * Function for getting profile detail
   * @param empty
   */
  public posts() {
    return this.http
      .invoke({
        method: config.apiMethods.get,
        path: config.apiUrls.POSTS
      });
  }
  /**
   * Function for adding post
   * @param form
   */
  public addPost(form) {
    if (form.valid) {
      this.http
        .invoke({
          method: config.apiMethods.post,
          path: config.apiUrls.POSTS,
          body: form.value
        })
        .subscribe(
          data => {
            form.reset();
            this.router.navigateByUrl(config.routePaths['listPosts']);
          },
          error => {
            this.flash.showError(error.error.message);
          }
        );
    }
  }

  /**
   * Function for deleting a post
   * @param form
   */
  public deletePost(id) {
    if (id) {
      this.http
        .invoke({
          method: config.apiMethods.delete,
          path: config.apiUrls.POSTS + '/' + id
        })
        .subscribe(
          data => {
            this.flash.showSuccess(data.message);
            this.router.navigateByUrl(config.routePaths['listPosts']);
          },
          error => {
            this.flash.showError(error.error.message);
          }
        );
    }
  }

  /**
   * Function for editing a post
   * @param form
   */
  public editPost(form) {
    const id = form.value._id;
    delete form.value._id;
    if (id) {
      this.http
        .invoke({
          method: config.apiMethods.put,
          path: config.apiUrls.editPost + '/' + id,
          body: form.value
        })
        .subscribe(
          data => {
            this.flash.showSuccess(data.message);
            this.router.navigateByUrl(config.routePaths['listPosts']);
          },
          error => {
            this.flash.showError(error.error.message);
          }
        );
    }else{
      this.flash.showError("Invalid record! Please check it.");
    }
  }

  /**
   * Function for editing a post
   * @param form
   */
  public getPost(id) {
    if (id) {
      return this.http
        .invoke({
          method: config.apiMethods.get,
          path: config.apiUrls.getPost + '/' + id
        });
    }
  }

}
