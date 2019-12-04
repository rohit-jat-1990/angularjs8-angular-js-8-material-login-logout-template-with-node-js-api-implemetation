import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { SessionManagerService } from '../services/session-manager.service';
import { Observable } from 'rxjs';

/**
* @description Interceptor is useful to set token in header
* @returns {request}
*/
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: SessionManagerService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.authHeader()}`
      }
    });
    return next.handle(request);
  }
}