import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgifComponent } from './ngif/ngif.component';
import {HelloComponent} from "./hello/hello.component";
import {ListPostsComponent} from "./observable-example/list-posts/list-posts.component";

const appRoutes: Routes = [
  {
    path: '', component: HelloComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
