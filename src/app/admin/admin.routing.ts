import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminComponent} from "./admin/admin.component";
import {AdminModule} from './admin.module';

const appRoutes: Routes = [

  {
    path: '', component: AdminComponent
  }
];
export const routing: ModuleWithProviders<AdminModule> = RouterModule.forChild(appRoutes);
