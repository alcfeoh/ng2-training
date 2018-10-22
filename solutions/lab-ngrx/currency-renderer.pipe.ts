import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {State} from './reducers';
import {Store} from '@ngrx/store';
import {Currency} from './currency-switcher/currency';

@Pipe({
  name: 'currencyRenderer',
  pure: false
})
export class CurrencyRendererPipe implements PipeTransform {

  private format = '1.0-2';
  private currency: Currency;

  constructor(private store: Store<State>) {
    store.subscribe((state) => {
      this.currency = state.currencyState.currency;
    });
  }

  transform(value: any, changeRate: number = 1.0): any {
    if (this.currency !== 'EUR') {
      return new CurrencyPipe('en-US')
        .transform(value * changeRate, this.currency, 'symbol', this.format);
    } else {
      const result =  new DecimalPipe('en-US').transform(value * changeRate, this.format);
      return result + "€";
    }
  }

}
