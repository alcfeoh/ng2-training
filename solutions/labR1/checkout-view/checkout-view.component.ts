import { Component } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent {

  constructor(private cartService: CartService) {

  }
}
