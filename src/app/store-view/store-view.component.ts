import { Component } from '@angular/core';
import {LicensePlateService} from '../license-plate.service';
import {LicensePlate} from '../license-plate';
import {Observable} from 'rxjs/index';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent {

  licensePlates$: Observable<LicensePlate[]>;
  showPopup = false;

  constructor(private service: LicensePlateService, private cartService: CartService) {
    this.licensePlates$ = this.service.getList();
  }

  addToCart(plate: LicensePlate) {
    this.cartService.addToCart(plate).subscribe(() => this.showPopup = true);
  }
}
