import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Post} from "./post";

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getPosts() : Observable<Post> {
    return this.http.get("http://localhost:8080/posts.json")
      .map(result => result.json())
      .switchMap(postsData =>
        Observable.interval(2000)
          .take(postsData.length)
          .map(index => postsData[index])
    );
  }

  getPostsAsPromise() : PromiseLike<Post[]> {
    return this.http.get("http://localhost:8080/posts.json")
      .map(result => result.json())
      .toPromise();
  }
}
