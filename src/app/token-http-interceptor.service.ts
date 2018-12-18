import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {LoginService} from './router/login/login.service';

/**
 * This interceptor automatically adds the token header needed by our backend API if such token is present
 * in the current state of the application.
 */
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTOR');
    const token = this.loginService.getAuthToken();
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append('authtoken', token);
    }
    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq);
  }
}
