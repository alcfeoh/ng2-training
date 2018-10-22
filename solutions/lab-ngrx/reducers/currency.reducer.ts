
import {Currency} from '../currency-switcher/currency';
import {CurrencyActions, CurrencyActionTypes} from '../actions/change-currency.actions';


export interface CurrencyState {
  currency: Currency;
}

export const initialState: CurrencyState = {
  currency: 'USD'
};

export function reducer(state = initialState, action: CurrencyActions): CurrencyState {
  switch (action.type) {
    case CurrencyActionTypes.ChangeCurrency:
      return {currency: action.currency};
    default:
      return state;
  }
}
