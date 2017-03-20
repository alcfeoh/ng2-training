import { Component } from '@angular/core';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-router',
  template: `
<p *ngIf="! loginService.isUserLoggedIn()">Please log in first</p>
<router-outlet></router-outlet>
      <h1>Component Router</h1>
      <ul>
        <li><a routerLink="/" routerLinkActive="active">Hello World example</a></li>
        <li><a routerLink="/if" routerLinkActive="active">ngIf example</a></li>
        <li><a routerLink="/http" routerLinkActive="active">HTTP example</a></li>
      </ul>
      
    `,
})
export class RouterComponent {

  constructor(private loginService : LoginService) {}

}
