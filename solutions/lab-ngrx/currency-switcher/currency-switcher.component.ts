import { Component } from '@angular/core';
import {Currency} from './currency';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {ChangeCurrency} from '../actions/change-currency.actions';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;
  public currency: Currency;

  constructor(public store: Store<State>) {
    store.subscribe((state) => {
      this.currency = state.currencyState.currency;
    });
  }

  changeCurrency(currency: Currency) {
    this.store.dispatch(new ChangeCurrency(currency));
    this.showItems = false;
  }
}
