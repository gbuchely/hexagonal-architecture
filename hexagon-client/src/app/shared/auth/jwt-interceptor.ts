import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Oauth2Service} from './oauth2.service';
import {ParameterService} from '../../parameter.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: Oauth2Service,
    private parameterService: ParameterService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    console.log('Intercepted:: ' + request)

    console.log(request.url.search('http://localhost:8080/api/*'))
    if (request.url.search('http://localhost:8080/api/*') === 0 ) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + this.parameterService.access_token
        }
      });
    }

    return next.handle(request);
  }
}
