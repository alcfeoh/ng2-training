import {Injectable} from '@angular/core';


@Injectable()
export class AuthGuard  {

  constructor() {
  }

  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');
    return true;
  }

}
