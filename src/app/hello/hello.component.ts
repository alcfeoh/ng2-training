import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hello',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
  `
})
export class HelloComponent {

  name : string;

  constructor() {
    this.name = 'Angular 2 ';
  }

}
