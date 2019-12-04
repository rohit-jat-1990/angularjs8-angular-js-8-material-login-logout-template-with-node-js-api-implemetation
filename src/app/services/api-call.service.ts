import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { config } from '../shared/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiMethods = config.apiMethods;
  constructor(private http: HttpClient) { }
  /**
   * Invoke function should be able to handle any HTTP request based on the @params
  */
  invoke(params): Observable<any> {
    if (params) {
      const method = params.method.toLowerCase();
      const { path, body, query } = params;
      const url = environment.apiServerUrl;
      const requestURL = `${url}${path}`;

      let request;
      let requestParams = new HttpParams();

      /**
       * CUSTOM REQUEST QUERY (?key=value)
       */
      if (query) {
        for (const key in query) {
          if (query.hasOwnProperty(key)) {
            requestParams = requestParams.append(key, query[key]);
          }
        }
      }

      const requestOptions = {
        params: requestParams,
      };

      /**
       * HANDLE GET, POST etc. REQUESTS
       */
      if (method === this.apiMethods.get) {
        request = this.http[method](requestURL, requestOptions);
      } else if (method === this.apiMethods.post || method === this.apiMethods.put || method === this.apiMethods.patch) {
        request = this.http[method](
          requestURL,
          body,
          requestOptions,
        );
      } else if (method === this.apiMethods.delete) {
        request = this.http.request(method, requestURL, {
          ...requestOptions,
          body: body,
        });
      } else {
        console.error(config.messages.unKnownMethod);
      }

      /**
       * RETURN API REQUEST
       */
      return request;
    }
  }
}
