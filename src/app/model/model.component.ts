import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: 'model.component.html'
})
export class ModelComponent {

  public person = {firstName: 'Alain', name: 'Chautard'};

}
