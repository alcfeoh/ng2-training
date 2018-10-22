import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {CurrencyState, reducer} from './currency.reducer';

export interface State {
  currencyState: CurrencyState;
}

export const reducers: ActionReducerMap<State> = {
  currencyState: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
