import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import {LicensePlateService} from './license-plate.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  licensePlates$: Observable<LicensePlate[]>;

  constructor(private service: LicensePlateService) {
    this.licensePlates$ = this.service.getList();
  }
}
