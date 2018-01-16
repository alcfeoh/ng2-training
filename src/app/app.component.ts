import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';

@Component({
  selector: 'app-root',
  template: `
      <app-hello></app-hello>
  `
})
export class AppComponent {

  licensePlate: LicensePlate = {
    "_id": "5a0c8ab27aecc7e77f4d73f0",
    "onSale": false,
    "picture": "http://angulartraining.com/plates/CA.png",
    "title": "2013 California My Tahoe license plate",
    "price": 9,
    "year": 2013,
    "state": "CA",
    "description": "Sunt irure nisi excepteur in ea consequat ad aliqua. Lorem duis in duis nisi sit. Cillum eiusmod ipsum mollit veniam consectetur ex eiusmod nisi laborum amet anim mollit non nulla. Lorem ea est exercitation nostrud consectetur officia laborum fugiat sint. Nostrud consequat magna officia minim et aute nostrud.\r\n"
  };

}
