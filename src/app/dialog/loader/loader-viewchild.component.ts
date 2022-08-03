import {Component, ViewChild} from '@angular/core';
import {DialogComponent} from "../dialog.component";

@Component({
  selector: 'app-loader-vc',
  templateUrl: './loader-viewchild.component.html'
})
export class LoaderViewChildComponent {

  @ViewChild(DialogComponent)
  popup: DialogComponent;

  showPopup(): void {
    this.popup.isOpen = true;
  }

  popupClosed(event): void {
    console.log(event);
  }
}
