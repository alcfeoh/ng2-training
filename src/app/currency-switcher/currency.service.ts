import { Injectable } from '@angular/core';
import {Currency} from './currency';

@Injectable()
export class CurrencyService {

  currency: Currency = 'USD';

  setCurrency(currency: Currency) {
    this.currency = currency;
  }

  getCurrency(): Currency {
    return this.currency;
  }
}
