import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StoreViewComponent} from './store-view/store-view.component';
import {CartViewComponent} from './cart-view/cart-view.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';

const appRoutes: Routes = [
  {
    path: '', component: StoreViewComponent
  },
  {
    path: 'cart', component: CartViewComponent
  },
  {
    path: 'checkout', component: CheckoutViewComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
