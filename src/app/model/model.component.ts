import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-model',
  templateUrl: 'model.component.html',
  styleUrls: ['model.component.css']
})
export class ModelComponent {

  public person = {firstName: 'Alain', name: 'Chautard'};

}
