import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  template: `<hello-world [message]="myMessage"></hello-world>`

})
export class CommunicationComponent {

  myMessage;

  constructor() {
    this.myMessage = 'Angular 2';
  }

}
