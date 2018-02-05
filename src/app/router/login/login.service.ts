import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  private isLoggedIn: boolean = false;
  private currentUser : string;

  constructor(private router: Router) { }

  login(username, password) {
    if (username == "admin") {
      this.currentUser = username;
      this.isLoggedIn = true;
      this.router.navigateByUrl('/');
    }else
      this.isLoggedIn = false;
  }

  isUserLoggedIn(){
    return this.isLoggedIn;
  }

  getCurrentUser(){
    return this.currentUser;
  }

}
