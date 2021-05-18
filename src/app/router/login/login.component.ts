import { Component } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  login(username: string, password: string): void {
    this.loginService.login(username, password)
      .subscribe(token => console.log('Successfully logged in'));
  }

}
