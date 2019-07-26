import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LicensePlate} from '../license-plate';
import {LicensePlateService} from '../license-plate.service';
import {CurrencyService} from '../currency.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent {

  licensePlates$: Observable<LicensePlate[]>;
  addToCartSuccessful = false;

  constructor(public service: LicensePlateService,
              public currencyService: CurrencyService,
              private cartService: CartService) {
    this.licensePlates$ = service.getList();
  }

  addToCart(plate: LicensePlate) {
    this.cartService.addToCart(plate).subscribe(success => this.addToCartSuccessful = true);
  }
}
