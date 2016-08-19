import { Component } from '@angular/core';
import { HelloWorld } from './helloWorld.component';

@Component({
  moduleId: module.id,
  selector: 'app-communication',
  template: `<hello-world [message]="myMessage"></hello-world>`

})
export class CommunicationComponent {

  myMessage;

  constructor() {
    this.myMessage = 'Angular 2';
  }

}
