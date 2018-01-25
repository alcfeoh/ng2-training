import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor;

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = '#F5F5F5';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.backgroundColor = '';
  }
}
