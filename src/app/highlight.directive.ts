import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight],button:not([noHighlight])'
})
export class HighlightDirective {

  @Input('appHighlight')
  color = 'red';

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  @HostListener('mouseover')
  mouseOver() {
    this.backgroundColor = this.color;
  }

  @HostListener('mouseout')
  mouseOut() {
    this.backgroundColor = '';
  }
}
