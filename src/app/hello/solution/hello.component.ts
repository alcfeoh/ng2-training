import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h2>Hello {{firstName}} {{name}}</h2>
    </div>
  `
})
export class HelloComponent {

  name : string;
  firstName: string = "John";

  constructor() {
    this.name = 'Angular';
  }

}
