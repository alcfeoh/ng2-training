import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor() {
  }

  canActivate(): Observable<boolean> {
    console.log('AuthGuard#canActivate called');
    return of(true);
  }

}
