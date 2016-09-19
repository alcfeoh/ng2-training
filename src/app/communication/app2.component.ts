import { Component } from '@angular/core';

@Component({
  selector: 'app-communication2',
  template: `<hello-world2 [message]="myMessage" (onClick)="myCallback($event)"></hello-world2>`

})
export class CommunicationComponent2 {

  myMessage;

  constructor() {
    this.myMessage = 'Angular2';
  }

  myCallback(event){
    this.myMessage = event;
  }

}
