import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h2 highlight>Hello {{name}}</h2>
    </div>
  `
})
export class HelloComponent {

  name : string;

  constructor() {
    this.name = 'Angular 2 ';
  }

}
