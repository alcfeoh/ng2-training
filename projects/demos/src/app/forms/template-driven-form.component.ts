import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: 'template-driven-form.component.html',
  styleUrls: ['template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  constructor() {}

  logForm(value) {
    console.log(value);
  }
}
