import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {Subject, Observable} from 'rxjs';

@Injectable()
export class PostsService {

  // We use a subject to emit data to all subscribers
  postsSubject: Subject<Post> = new Subject<Post>();

  constructor(private http: HttpClient) {
      // Using setInterval to poll the server every 2 seconds (2000 ms)
      setInterval(() => {
          // We subscribe and emit the post with the 'next' method
          this.getNextPost().subscribe(post => this.postsSubject.next(post));
      }, 2000);
  }

  getPosts(): Observable<Post> {
    // We return the subject as an observable otherwise subscribers
    // could use that object to emit data.
    return this.postsSubject.asObservable();
  }

  getNextPost(): Observable<Post> {
    // Making a request to get the latest post from the server
    return this.http.get<Post>('http://localhost:8000');
  }
}
