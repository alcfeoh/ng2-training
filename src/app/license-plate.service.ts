import { Injectable } from '@angular/core';
import {LicensePlate} from './license-plate';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor(private http: HttpClient) { }

  getList(): Observable<LicensePlate[]> {
     return this.http.get<LicensePlate[]>('http://localhost:8000/data')
       .pipe(
         tap(data => console.log('I can play with that data here if I want to'))
       );
  }
}
