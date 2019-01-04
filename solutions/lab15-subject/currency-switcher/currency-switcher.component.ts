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
  currency: Currency;

  constructor(public service: CurrencyService) {
    service.getCurrency().subscribe(curr => this.currency = curr.currency);
  }

  changeCurrency(currency: Currency) {
    this.service.setCurrency(currency);
    this.showItems = false;
  }
}
