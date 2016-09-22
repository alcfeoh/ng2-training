import { Component } from '@angular/core';

@Component({
  selector: 'app-router',
  template: `
      <h1>Component Router</h1>
      <ul>
        <li><a routerLink="/" routerLinkActive="active">Hello World example</a></li>
        <li><a routerLink="/if" routerLinkActive="active">ngIf example</a></li>
        <li><a routerLink="/http" routerLinkActive="active">HTTP example</a></li>
      </ul>
      <router-outlet></router-outlet>
    `,
})
export class RouterComponent {

  constructor() {}

}
