import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./post";
import {Subject, Observable} from 'rxjs';

@Injectable()
export class PostsService {

  postsSubject: Subject<Post> = new Subject<Post>();

  constructor(private http: HttpClient) {
      setInterval(() => {
        this.http.get<Post>("http://localhost:8000")
          .subscribe(post => this.postsSubject.next(post));
      }, 2000);
  }

  getPosts() : Observable<Post> {
    return this.postsSubject.asObservable();
  }
}
