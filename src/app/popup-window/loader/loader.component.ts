import {Component, ViewChild} from '@angular/core';
import {PopupWindowComponent} from '../popup-window.component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {

  showPopup = false;

  constructor() { }

  popupClosed(event) {
    console.log(event);
    this.showPopup = false;
  }

}
