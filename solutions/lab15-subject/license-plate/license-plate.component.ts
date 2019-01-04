import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyInfo, CurrencyService} from '../currency.service';
import {Currency} from '../currency-switcher/currency';

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

  currencyInfo: CurrencyInfo;

  constructor(public currencyService: CurrencyService) {
    currencyService.getCurrency().subscribe(curr => this.currencyInfo = curr);

  }


  buttonClicked() {
    alert('Plate added to cart');
  }
}
