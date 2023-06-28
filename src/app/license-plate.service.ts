import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LicensePlate} from './license-plate';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor(private http: HttpClient) { }

  getList(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>("http://localhost:8000/data");
  }
}
