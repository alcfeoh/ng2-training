import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe, DecimalPipe} from '@angular/common';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: any, currency: string = 'USD', changeRate: number = 1.0): any {
      return new CurrencyPipe('en-US')
        .transform(value * changeRate, currency, 'symbol', '1.0-2');
  }

}
