import { Injectable } from '@angular/core';
import {LicensePlate} from './license-plate';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LicensePlateService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<LicensePlate[]> {
    return this.httpClient.get<LicensePlate[]>('http://localhost:8000/data');
  }
}
