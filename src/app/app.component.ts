import {Component} from '@angular/core';
import {LicensePlate} from './license-plate';
import {LicensePlateService} from './license-plate.service';
import {Observable} from 'rxjs';
import {CurrencyService} from './currency.service';
import {CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  now = new Date();
}
