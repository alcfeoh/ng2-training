import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HelloComponent } from './hello';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import * as comm from "./communication/";

@NgModule({
    declarations: [HelloComponent, comm.CommunicationComponent, comm.HelloWorld, comm.HelloWorld2],
    imports:      [BrowserModule, HttpModule, FormsModule],
    bootstrap:    [HelloComponent],
})
export class AppModule {}
