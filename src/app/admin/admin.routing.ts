import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminComponent} from "./admin/admin.component";

const appRoutes: Routes = [

  {
    path: '', component: AdminComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
