import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn = false;
  private currentUser!: string;
  private authToken!: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.put<{token: string}>('http://localhost:8000/login', {username, password})
      .pipe(
        tap(data => {
          this.currentUser = username;
          this.isLoggedIn = true;
          this.authToken = data.token;
        }),
        map(tokenObj => tokenObj.token)
      );
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }

  getAuthToken(): string {
    return this.authToken;
  }
}
