import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { HelloComponent } from './app/hello';

if (environment.production) {
  enableProdMode();
}

bootstrap(HelloComponent);

