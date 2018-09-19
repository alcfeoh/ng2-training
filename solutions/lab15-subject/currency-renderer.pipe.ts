import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {CurrencyService} from './currency.service';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: any, currency = 'USD', changeRate = 1.0): any {
    if (currency === 'EUR') {
      return new DecimalPipe('fr')
        .transform(value * changeRate, '1.0-2') + '€';
    } else {
      return new CurrencyPipe('en-US')
        .transform(value * changeRate, currency, 'symbol', '1.0-2');
    }
  }

}
