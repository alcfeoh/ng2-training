import {Component} from '@angular/core';
import {Post} from './post';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {

  posts: Post[] = [];

  constructor(postService: PostsService) {
    // We get an observable from PostService
    postService.getPosts()
    // We subscribe to the observable, and add every single post to an array of posts
      .subscribe(post => this.posts.push(post));
  }
}




