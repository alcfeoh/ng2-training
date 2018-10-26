import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-message',
  template: `    
      <input type="text" [(ngModel)]="message">
  `
})
export class MessageComponent  {

  messageValue: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input()
  get message(){
    return this.messageValue;
  }

  set message(val) {
    this.messageValue = val;
    this.messageChange.emit(this.messageValue);
  }
}
