import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";

@Component({
  selector: 'app-root',
  template: `
      <app-hello></app-hello>
  `
})
export class AppComponent {

  licensePlates: LicensePlate[] = LICENSE_PLATES;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;

}
