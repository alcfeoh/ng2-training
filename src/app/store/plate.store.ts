import { Injectable } from '@angular/core';
import {Store} from './store';
import {LicensePlate} from '../license-plate';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateStore extends Store<LicensePlate[]> {

  constructor(private http: HttpClient) {
    super([]);
    this.refresh();
  }

  addPlate(plate: LicensePlate): void {
    this.setState([...this.state, plate]);
  }

  getPlates(): Observable<LicensePlate[]> {
    return this.state$;
  }

  refresh(): void {
    this.http.get<LicensePlate[]>('http://localhost:8000/data')
      .subscribe(data => this.setState(data));
  }
}
