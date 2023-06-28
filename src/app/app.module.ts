import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { routing } from './app.routing';
import {LoginComponent} from "./router/login/login.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import {LicensePlateComponent} from './license-plate/license-plate.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartService } from './cart.service';
import {CurrencySwitcherComponent} from './currency-switcher/currency-switcher.component';
import {TokenInterceptorService} from './token-http-interceptor.service';
import {CheckoutFormComponent} from './checkout-form/checkout-form.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';
import {CartViewComponent} from './cart-view/cart-view.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StoreViewComponent } from './store-view/store-view.component';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, LicensePlateComponent,
    LoginComponent, DialogComponent, HeaderComponent,
    CarouselComponent, CurrencySwitcherComponent,
    CheckoutFormComponent, CheckoutViewComponent, CartViewComponent, JumbotronComponent, NavigationComponent, StoreViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule , routing
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
