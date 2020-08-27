import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  @Output()
  buttonClick = new EventEmitter<LicensePlate>();

  buttonClicked() {
    this.buttonClick.emit(this.plate);
  }
}
