import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {

  showPopup = false;
  name = '';

  constructor() { }

  popupClosed(event) {
    console.log(event);
    this.showPopup = false;
  }

  promptUser() {
    this.name = prompt('Please enter your name');
    this.showPopup = true;
  }
}
