import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { HelloComponent } from './app/hello';
import { BindingsComponent } from './app/bindings';
import { ModelComponent } from './app/model';
import { NgforComponent } from './app/ngfor';
import { HttpComponent } from './app/http';
import { NgifComponent } from './app/ngif';
import { CommunicationComponent } from './app/communication';
import { CommunicationComponent2 } from './app/communication';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgifComponent, [ HTTP_PROVIDERS ]);

