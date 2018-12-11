import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { routing } from './app.routing';
import { JasmineTestComponent } from './jasmine-test/jasmine-test.component';
import {AuthGuard} from "./router/auth-guard-service";
import {LoginService} from "./router/login/login.service";
import {LoginComponent} from "./router/login/login.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { LoaderComponent } from './popup-window/loader/loader.component';
import { HeaderComponent } from './header/header.component';
import {LoaderViewChildComponent} from "./popup-window/loader/loader-viewchild.component";
import {EvenUppercasePipe} from "./pipe-solution/even-uppercase.pipe";
import {LicensePlateComponent} from './license-plate/license-plate.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartService } from './cart.service';
import {CurrencySwitcherComponent} from './currency-switcher/currency-switcher.component';
import {EnumUtilsModule} from '../../projects/enum-utils/src/lib/enum-utils.module';
import {TokenInterceptorService} from './token-http-interceptor.service';
//import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, LicensePlateComponent,
    EvenUppercasePipe,
    JasmineTestComponent,
    LoginComponent,
    PopupWindowComponent, LoaderComponent, HeaderComponent,
    LoaderViewChildComponent,
    CarouselComponent, CurrencySwitcherComponent
  ],
  imports: [
    BrowserModule,
    EnumUtilsModule,
    FormsModule,
    HttpClientModule,
    RouterModule , routing
    //,ReactiveFormsModule
  ],
  providers: [AuthGuard, LoginService, CartService,  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
