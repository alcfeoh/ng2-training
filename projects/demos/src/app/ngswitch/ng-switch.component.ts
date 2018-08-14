import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
    <div [ngSwitch]="page">
      <p *ngSwitchCase="1">Viewing content of first page</p>
      <p *ngSwitchCase="2">Viewing content of second page</p>
      <p *ngSwitchCase="3">Viewing content of third page</p>
      <p *ngSwitchDefault>No page selected</p>
    </div>
    <div>
      <button (click)="page = 1">Page 1</button>
      <button (click)="page = 2">Page 2</button>
      <button (click)="page = 3">Page 3</button>
    </div>
  `
})
export class NgSwitchComponent {

  page = null;

}
