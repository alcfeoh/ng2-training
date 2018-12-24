import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  private isLoggedIn = false;
  private currentUser: string;
  private authToken: string;

  constructor(private http: HttpClient, private router: Router) { }

  login(username, password): Observable<string> {
    return this.http.put('http://localhost:8000/login', {username, password})
      .pipe(
        tap(data => {
          this.currentUser = username;
          this.isLoggedIn = true;
          this.authToken = data['token'];
          this.router.navigateByUrl('');
        }),
        map(tokenObj => tokenObj['token'])
      );
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getAuthToken() {
    return this.authToken;
  }
}
