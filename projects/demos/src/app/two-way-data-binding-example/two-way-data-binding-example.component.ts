import {Component} from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-example',
  template: `
      <app-message [(message)]="myMessage"></app-message>
    <div>
      myMessage value: {{myMessage}}
    </div>
  `
})
export class TwoWayDataBindingExampleComponent  {

  myMessage = 'world';
}
