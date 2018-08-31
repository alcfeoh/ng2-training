import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import {LicensePlateService} from './license-plate.service';
import {Observable} from 'rxjs';
import {CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  licensePlates$: Observable<LicensePlate[]>;
  showPopup = false;

  constructor(private service: LicensePlateService, private cartService: CartService) {
    this.licensePlates$ = this.service.getList();
  }

  addToCart(plate: LicensePlate) {
    this.cartService.addToCart(plate).subscribe(() => this.showPopup = true);
  }
}
