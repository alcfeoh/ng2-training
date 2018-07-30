import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';
import {PostsService} from './observable-example/list-posts/posts.service';
import {HttpClientModule} from '@angular/common/http';
import {TwoWayDataBindingExampleComponent} from './two-way-data-binding-example/two-way-data-binding-example.component';
import {FormsModule} from '@angular/forms';
import {BindingsComponent} from './bindings';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ListPostsComponent,
    TwoWayDataBindingExampleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule, routing
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
