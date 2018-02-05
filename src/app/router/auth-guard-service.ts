
import { Injectable }     from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from "rxjs";
import {LoginService} from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){}

  canActivate() : Observable<boolean> {
    console.log('AuthGuard#canActivate called');
    const isLoggedIn = this.loginService.isUserLoggedIn();
    if (! isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
    return Observable.of(isLoggedIn);
  }

}
