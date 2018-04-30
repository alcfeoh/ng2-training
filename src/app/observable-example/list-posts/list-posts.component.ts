import { Component } from '@angular/core';
import {Post} from "./post";
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {

  posts : Post[] = [];

  constructor(postService : PostsService) {
    postService.getPosts()
      .subscribe(post => this.posts.push(post));
  }
}




