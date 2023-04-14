import {Injectable, Signal, signal} from '@angular/core';
import {Currency} from './currency-switcher/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencySignal = signal<Currency>("USD");

  constructor() { }

  get currency(): Signal<Currency> {
    return this.currencySignal.asReadonly();
  }

  setCurrency(curr: Currency): void {
    this.currencySignal.set(curr);
  }
}
