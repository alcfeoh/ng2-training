import { Component } from '@angular/core';
import {CurrencyService} from './currency.service';
import {Currency} from './currency';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;

  constructor(public service: CurrencyService) { }

  changeCurrency(currency: Currency) {
    this.showItems = false;
    this.service.setCurrency(currency);
  }
}
