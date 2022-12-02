import {Component} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cartContents: LicensePlate[] = [];

  constructor(private service: CartService) {
    service.getCartContents().subscribe(data => this.cartContents = data);
  }

  removeFromCart(plate: LicensePlate): void {
    // TODO
  }

}
