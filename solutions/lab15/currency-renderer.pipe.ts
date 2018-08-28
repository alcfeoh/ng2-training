import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {CurrencyService} from './currency.service';

@Pipe({
  name: 'currencyRenderer',
  pure: false
})
export class CurrencyRendererPipe implements PipeTransform {

  private format = '1.0-2';

  constructor(private service: CurrencyService){}

  transform(value: any, changeRate: number = 1.0): any {
    const currency = this.service.getCurrency();
    if (currency != 'EUR'){
      return new CurrencyPipe('en-US')
        .transform(value * changeRate, currency, 'symbol', this.format);
    } else {
      let result =  new DecimalPipe('en-US').transform(value * changeRate,this.format);
      return result + "€";
    }
  }

}
