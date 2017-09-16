import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isLoggedIn: boolean = false;
  private currentUser : string;

  constructor() { }

  login(username, password) {
    if (username == "admin") {
      this.currentUser = username;
      this.isLoggedIn = true;
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
