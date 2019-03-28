import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {LoginService} from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public service: LoginService, public router: Router) {
  }

  canActivate(): boolean | UrlTree {
    return this.service.isUserLoggedIn() || this.router.parseUrl('login');
  }
}
