import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  isLoggedIn = false;

  constructor() { }

  login(username, password){
    if (username == "admin")
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;
  }

  isUserLoggedIn(){
    return this.isLoggedIn;
  }

}
