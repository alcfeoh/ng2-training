import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';

const appRoutes: Routes = [
  {
    path: 'list-posts', component: ListPostsComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
