import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-bindings',
  templateUrl: 'bindings.component.html'
})
export class BindingsComponent {

  name : string = "A Test";

  alertName() : void {
    alert(`${this.name} was clicked`);
  }

}
