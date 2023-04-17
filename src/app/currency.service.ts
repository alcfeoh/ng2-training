import {computed, Injectable, Signal, signal} from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {toSignal} from '@angular/core/rxjs-interop';

export interface Rates {
  [currency: string]: number;
}

export interface RatesResponse {
  success: boolean;
  base: string;
  date: string;
  rates: Rates;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private EXCHANGE_RATES_URL = 'https://api.exchangerate.host/latest?base=USD';

  private currencySignal = signal<Currency>('USD');
  private symbols = {USD: "$", EUR: "€", GBP: "£"};
  symbol = computed<string>(() => this.symbols[this.currencySignal()]);
  // We make a request to a server to get current exchange rates
  private rates$: Observable<Rates> = this.getAllRatesFromApi();
  // We turn that Observable into a Signal with a default value
  private ratesSignal = toSignal(this.rates$, {initialValue: {USD: 1, GBP: 1, EUR: 1}});
  // Finally, we use another computed Signal
  // to return the exchange rate for the current currency
  exchangeRate = computed<number>(() => this.ratesSignal()[this.currencySignal()])

  constructor(private http: HttpClient) {
  }

  get currency(): Signal<Currency> {
    return this.currencySignal.asReadonly();
  }

  setCurrency(curr: Currency): void {
    this.currencySignal.set(curr);
  }

  private getAllRatesFromApi(): Observable<Rates> {
      return this.http
        .get<RatesResponse>(this.EXCHANGE_RATES_URL)
        .pipe(map(response => response.rates));
    }

}
