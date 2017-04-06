import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello-world2',
  template: `
    <div (click)="handleClick()">
      <h2>Hello {{message}}</h2>
    </div>
  `
})
export class HelloWorld2 {

  @Input()
  message;

  @Output()
  onClick : EventEmitter<string> = new EventEmitter();

  handleClick(){
    this.message = prompt("What is your name?");
    this.onClick.emit(this.message);
  }
}
