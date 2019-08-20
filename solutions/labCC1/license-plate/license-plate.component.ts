import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyService} from '../currency.service';

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

  constructor(public service: CurrencyService) { }
}
