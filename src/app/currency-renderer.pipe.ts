import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: number, currency = 'USD', exchangeRate = 1.0): string {
    const currencyPipe = new CurrencyPipe('en-US');
    return currencyPipe
      .transform(value * exchangeRate, currency, 'symbol', '1.0-2');
  }

}
