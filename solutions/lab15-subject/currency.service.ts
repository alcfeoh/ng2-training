import { Injectable } from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export interface Rates {
  EUR: number;
  GBP: number;
}

export interface CurrencyInfo {
  currency: Currency;
  changeRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency$ = new BehaviorSubject<CurrencyInfo>({currency: 'USD', changeRate: 1});

  rates: Rates;

  constructor(private http: HttpClient) {
    http.get<Rates>('http://localhost:8000/rates')
      .subscribe(rates => this.rates = rates);
  }

  getCurrency(): Observable<CurrencyInfo> {
    console.log('getCurrency');
    return this.currency$.asObservable();
  }

  setCurrency(curr: Currency) {
    const currencyInfo = {currency: curr, changeRate: this.rates[curr]};
    this.currency$.next(currencyInfo);
  }
}
