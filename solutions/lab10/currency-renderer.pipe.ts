import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe, DecimalPipe} from '@angular/common';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  private format = '1.0-2';

  transform(value: any, currency: string = 'USD', changeRate: number = 1.0): any {
    if (currency != 'EUR'){
      return new CurrencyPipe('en-US')
        .transform(value * changeRate, currency, 'symbol', this.format);
    } else {
      let result =  new DecimalPipe('en-US').transform(value * changeRate,this.format);
      return result + "€";
    }
  }

}
