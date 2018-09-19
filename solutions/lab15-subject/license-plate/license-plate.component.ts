import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyService} from '../currency.service';
import {Observable} from 'rxjs/index';
import {Currency} from '../currency-switcher/currency';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  currency$: Observable<Currency>;

  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  constructor(private currencyService: CurrencyService) {
    this.currency$ = currencyService.getCurrency();
  }
}
