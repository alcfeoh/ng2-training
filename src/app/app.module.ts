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
import {NgforComponent} from "./ngfor/ngfor.component";
import {NgifComponent} from "./ngif/ngif.component";
import {NgswitchComponent} from "./ngswitch/ngswitch.component";
import { FormsComponent } from './forms/forms.component';
import { routing } from './app.routing';
import { RouterComponent } from './router/router.component';
import { JasmineTestComponent } from './jasmine-test/jasmine-test.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import {AuthGuard} from "./router/auth-guard-service";
//import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, BindingsComponent,
    comm.CommunicationComponent, comm.CommunicationComponent2, comm.HelloWorld, comm.HelloWorld2,
    HidingComponent, HttpComponent, ModelComponent,
    NgforComponent, NgifComponent, NgswitchComponent, FormsComponent, RouterComponent, JasmineTestComponent, PromiseExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule, routing
    //,ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
