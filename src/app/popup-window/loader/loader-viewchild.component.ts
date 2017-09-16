import {Component, ViewChild} from '@angular/core';
import {PopupWindowComponent} from "../popup-window.component";

@Component({
  selector: 'app-loader-vc',
  templateUrl: './loader-viewchild.component.html'
})
export class LoaderViewChildComponent {

  @ViewChild(PopupWindowComponent)
  popup : PopupWindowComponent;

  showPopup() {
    this.popup.isOpen = true;
  }

  popupClosed(event) {
    console.log(event);
  }
}
