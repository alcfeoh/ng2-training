import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post";

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post> {
    return this.http.get<Post[]>("http://localhost:8080/posts.json")
      .switchMap(postsData =>
        Observable.interval(2000)
          .take(postsData.length)
          .map(index => postsData[index])
    );
  }

  getPostsAsPromise() : PromiseLike<Post[]> {
    return this.http.get<Post[]>("http://localhost:8080/posts.json").toPromise();
  }
}
