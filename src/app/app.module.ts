import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BindingsComponent } from './bindings/bindings.component';
import * as comm from './communication';
import {HidingComponent} from "./hiding/hiding.component";
import {HttpComponent} from "./http/http.component";
import {ModelComponent} from "./model/model.component";
import {NgifComponent} from "./ngif/ngif.component";
import {NgswitchComponent} from "./ngswitch/ngswitch.component";
import { FormsComponent } from './forms/forms.component';
import { routing } from './app.routing';
import { RouterComponent } from './router/router.component';
import { JasmineTestComponent } from './jasmine-test/jasmine-test.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import {AuthGuard} from "./router/auth-guard-service";
import {LoginService} from "./router/login/login.service";
import {LoginComponent} from "./router/login/login.component";
import {ObservableExampleComponent} from "./observable-example/observable-example.component";
import {NgforComponent} from "./ngfor/ngfor.component";
import { ListPostsComponent } from './observable-example/list-posts/list-posts.component';
import {PostsService} from "./observable-example/list-posts/posts.service";
import { NgClassComponent } from './ng-class/ng-class.component';
import {HttpClientModule} from "@angular/common/http";
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { LoaderComponent } from './popup-window/loader/loader.component';
//import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, BindingsComponent,
    comm.CommunicationComponent, comm.CommunicationComponent2, comm.HelloWorld, comm.HelloWorld2,
    HidingComponent, HttpComponent, ModelComponent,
    NgifComponent, NgswitchComponent, FormsComponent, RouterComponent, JasmineTestComponent,
    PromiseExampleComponent, ObservableExampleComponent, LoginComponent, NgforComponent, ListPostsComponent, NgClassComponent, PopupWindowComponent, LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule //, routing
    //,ReactiveFormsModule
  ],
  providers: [AuthGuard, LoginService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
