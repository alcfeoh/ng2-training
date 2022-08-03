import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {

  showPopup = false;

  constructor() { }

  popupClosed(event): void {
    console.log(event);
    this.showPopup = false;
  }

}
