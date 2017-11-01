import { Component } from '@angular/core';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-router',
  template: `

      <h1>Component Router</h1>
      <ul>
        <li><a routerLink="/" >Hello World example</a></li>
        <li><a routerLink="/if" >ngIf example</a></li>
        <li><a routerLink="/posts">Social media posts</a></li>
      </ul>
      
      <hr>
      <router-outlet></router-outlet>
      
    `,
})
export class RouterComponent {

  constructor() {}

}
