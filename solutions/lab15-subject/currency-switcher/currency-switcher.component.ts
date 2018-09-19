import { Component } from '@angular/core';
import {Currency} from './currency';
import {CurrencyService} from '../currency.service';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  currency$: Observable<Currency>;

  showItems = false;

  constructor(public currencyService: CurrencyService) {
    this.currency$ = currencyService.getCurrency();
  }

  changeCurrency(currency: Currency) {
    this.currencyService.setCurrency(currency);
    this.showItems = false;
  }
}
