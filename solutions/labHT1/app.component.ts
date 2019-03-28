import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import {LicensePlateService} from './license-plate.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  licensePlates: LicensePlate[];
  subscription: Subscription;

  constructor(private service: LicensePlateService) {
    this.subscription = this.service.getList().subscribe(data => this.licensePlates = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
