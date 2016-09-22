import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgifComponent } from './ngif/ngif.component';
import {HelloComponent} from "./hello/hello.component";
import {HttpComponent} from "./http/http.component";

const appRoutes: Routes = [
  {
    path: 'if', component: NgifComponent
  },
  {
    path: '', component: HelloComponent
  },
  {
    path: 'http', component: HttpComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
