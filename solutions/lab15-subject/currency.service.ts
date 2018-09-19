import { Injectable } from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency$ = new BehaviorSubject<Currency>('USD');

  changesRates = {
    'USD' : 1.0,
    'GBP': 1.4,
    'EUR': 1.2
  };

  constructor() { }

  getCurrency(): Observable<Currency> {
    return this.currency$.asObservable();
  }

  setCurrency(curr: Currency): void {
    this.currency$.next(curr);
  }

  getChangeRate(): number {
    return this.changesRates[this.currency$.getValue()];
  }
}
