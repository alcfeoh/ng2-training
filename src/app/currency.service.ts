import {computed, Injectable, Signal, signal} from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencySignal = signal<Currency>('USD');
  private symbols = {USD: "$", EUR: "€", GBP: "£"};
  symbol = computed<string>(() => this.symbols[this.currencySignal()]);

  get currency(): Signal<Currency> {
    return this.currencySignal.asReadonly();
  }

  setCurrency(curr: Currency): void {
    this.currencySignal.set(curr);
  }

}
