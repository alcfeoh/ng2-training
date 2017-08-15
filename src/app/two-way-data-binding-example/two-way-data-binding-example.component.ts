import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-example',
  template: `
      Hello {{message}}
      <br>
      <input type="text" [(ngModel)]="message">

  `
})
export class TwoWayDataBindingExampleComponent  {

  messageValue : string;

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
