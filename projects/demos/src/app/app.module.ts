import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';
import {PostsService} from './observable-example/list-posts/posts.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule, routing
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
