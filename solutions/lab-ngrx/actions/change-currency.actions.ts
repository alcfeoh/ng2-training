import { Action } from '@ngrx/store';
import {Currency} from '../currency-switcher/currency';

export enum CurrencyActionTypes {
  ChangeCurrency = '[ChangeCurrency] ChangeCurrency'
}

export class ChangeCurrency implements Action {
  readonly type = CurrencyActionTypes.ChangeCurrency;
  constructor(public currency: Currency) {}
}

export type CurrencyActions = ChangeCurrency;
