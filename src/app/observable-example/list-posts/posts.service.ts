import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "./post";
import { map, take, switchMap } from "rxjs/operators";
import { interval } from "rxjs/observable/interval";

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post> {
    return this.http.get<Post[]>("http://localhost:8080/posts.json")
      .pipe(
        switchMap(postsData =>
          interval(2000).pipe(
            take(postsData.length),
            map(index => postsData[index])
          )
        )
    );
  }

  getPostsAsPromise() : PromiseLike<Post[]> {
    return this.http.get<Post[]>("http://localhost:8080/posts.json").toPromise();
  }
}
