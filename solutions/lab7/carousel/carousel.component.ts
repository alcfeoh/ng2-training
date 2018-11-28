import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  slide = 0;

  constructor() {
    //setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.slide = (this.slide + 1) % 3 ;
  }
  previousSlide() {
    this.slide = (this.slide === 0 ? 2 : this.slide -1);
  }

}
