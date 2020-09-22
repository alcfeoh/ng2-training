import { Injectable } from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {HttpClient} from '@angular/common/http';

export interface Rates {
  EUR: number;
  GBP: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency: Currency = 'USD';
  rates: Rates;

  constructor(private http: HttpClient) {
    http.get<Rates>('http://localhost:8000/rates')
      .subscribe(rates => this.rates = rates);
  }

  setCurrency(currency: Currency) {
    this.currency = currency;
  }

  getCurrency(): Currency {
    return this.currency;
  }

  getExchangeRate(): number {
    return this.rates[this.currency] || 1;
  }
}
