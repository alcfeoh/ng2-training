import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.css']
})
export class FormsComponent {

  constructor() {}

  logForm(value) {
    console.log(value);
  }
}

interface State {
  name: string;
  abbreviation: string;
}
