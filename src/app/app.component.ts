import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import {LicensePlateService} from "./license-plate.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  now = new Date();

  licensePlates: LicensePlate[] ;

  constructor(service: LicensePlateService) {
       service.getList().subscribe(data => this.licensePlates = data);
  }
}
