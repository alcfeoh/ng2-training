import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  getCartContents(): Observable<LicensePlate[]> {
    console.log('Reading cart');
    return of(readCart());
  }

  addToCart(plate: LicensePlate): Observable<any> {
    const plates = readCart();
    plates.push(plate);
    writeCart(plates);
    return of({ message: 'Plate added to cart'});
  }

  removeFromCart(plate: LicensePlate): Observable<any> {
    const plates = readCart();
    plates.splice(plates.findIndex(p => plate._id === p._id), 1);
    writeCart(plates);
    return of({ message: 'Plate removed fron cart'});
  }
}

function readCart(): LicensePlate[] {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function writeCart(contents: LicensePlate[]): void {
  localStorage.setItem('cart', JSON.stringify(contents));
}
