import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // We use a websocket to receive a stream of data from the server
  postsWebSocket: WebSocketSubject<Post>;

  constructor() {
    this.postsWebSocket = webSocket('ws://localhost:8000');
  }

  getPosts(): Observable<Post> {
    return this.postsWebSocket.asObservable();
  }
}

