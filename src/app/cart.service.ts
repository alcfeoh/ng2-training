import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  getCartContents(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:8000/cart');
  }

  addToCart(plate: LicensePlate): Observable<string> {
    // TODO
    return Observable.of("To be implemented");
  }

  removeFromCart(plate: LicensePlate): Observable<string> {
    // TODO
    return Observable.of("To be implemented");
  }

}
