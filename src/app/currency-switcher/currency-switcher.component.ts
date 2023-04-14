import { Component } from '@angular/core';
import {Currency} from './currency';
import {CurrencyService} from '../currency.service';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;

  constructor(protected currencyService: CurrencyService) { }

  changeCurrency(currency: Currency): void {
    // TODO Update Currency using CurrencyService
  }
}
