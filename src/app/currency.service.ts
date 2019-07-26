import { Injectable } from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface CurrencyInfo {
  currency: Currency;
  exchangeRate: number;
}

const defaultInfo: CurrencyInfo = {currency: 'USD', exchangeRate: 1.0};

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency$: Subject<CurrencyInfo> = new BehaviorSubject(defaultInfo);

  rates: any;

  constructor(private http: HttpClient) {
    http.get('http://localhost:8000/rates')
      .subscribe(rates => this.rates = rates);
  }

  getCurrency(): Observable<CurrencyInfo> {
    return this.currency$.asObservable();
  }

  setCurrency(curr: Currency) {
    const info: CurrencyInfo = {currency: curr, exchangeRate: this.rates[curr] || defaultInfo.exchangeRate };
    this.currency$.next(info);
  }

}
