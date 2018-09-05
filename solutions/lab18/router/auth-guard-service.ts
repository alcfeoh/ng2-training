import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {LoginService} from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public service: LoginService, public router: Router) {
  }

  canActivate(): Observable<boolean> {
    const isLoggedIn = this.service.isUserLoggedIn();
    if (! isLoggedIn) {
        this.router.navigateByUrl('login');
    }
    return of(isLoggedIn);
  }

}
