import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyInfo} from '../currency.service';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicensePlateComponent {

  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  @Input()
  currency: CurrencyInfo;

  @Output()
  btnClicked = new EventEmitter<LicensePlate>();

  constructor() {
  }

  buttonClicked() {
    this.btnClicked.emit(this.plate);
  }
}
