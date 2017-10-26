import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {routing} from "./admin.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
