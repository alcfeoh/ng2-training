import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  getCartContents(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:8000/cart');
  }

  addToCart(plate: LicensePlate) {
    // TODO
  }

  removeFromCart(plate: LicensePlate) {
    // TODO
  }

}
