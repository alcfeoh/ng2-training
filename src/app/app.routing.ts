import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HelloComponent} from "./hello/hello.component";

const appRoutes: Routes = [
  {
    path: '', component: HelloComponent
  }
];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
