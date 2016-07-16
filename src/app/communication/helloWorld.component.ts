import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <div>
      <h2>Hello {{message}}</h2>
    </div>
  `
})
export class HelloWorld {

  @Input()
  message : String;

}
