import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: 'model.component.html'
})
export class ModelComponent {

  accepted = false;

  person = {firstName: 'Alain', name: 'Chautard'};

}
