import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { HelloComponent } from './app/hello';
import { BindingsComponent } from './app/bindings';
import { ModelComponent } from './app/model';
import { NgforComponent } from './app/ngfor';

if (environment.production) {
  enableProdMode();
}


