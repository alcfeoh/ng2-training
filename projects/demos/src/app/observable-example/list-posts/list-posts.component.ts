import {Component} from '@angular/core';
import {Post} from './post';
import {PostsService} from './posts.service';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {

  posts: Post[] = [];
  emails: string[] = [];

  constructor(private postService: PostsService) {
    // We get an observable from PostService and subscribe to it
    this.postService.getPosts()
      .subscribe(post => this.posts.push(post));
  }

  subscribeToEmailStream() {
    this.postService.getPosts()
      .pipe(
        // Here we use map to only keep the email out of each post
        map(post => post.email)
        // We thus subscribe to a stream of emails instead of posts
      ).subscribe(email => this.emails.push(email));
  }
}




