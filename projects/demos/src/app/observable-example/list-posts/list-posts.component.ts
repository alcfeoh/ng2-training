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

  constructor(private postService: PostsService) {
     // This will only retrieve one post
     this.fetchNextPost();
     // This will subscribe to a stream of posts, updated every 2 seconds
     //this.subscribeToPostsStream();
  }

  fetchNextPost() {
    // We get an observable from PostService
    this.postService.getNextPost()
    // We subscribe to the observable, and add the new post to an array of posts
      .subscribe(post => this.posts.push(post));
  }

  subscribeToPostsStream() {
    // We get an observable from PostService
    this.postService.getPosts()
    // We subscribe to the observable, and add every single post to an array of posts
      .subscribe(post => this.posts.push(post));
  }
}




