import { Component } from '@angular/core';
import {Currency} from './currency';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;

  constructor() { }

  changeCurrency(currency: Currency): void {
    // TODO
  }
}
