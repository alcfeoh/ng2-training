import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('NG ON INIT');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('NG ON CHANGES', changes);
  }

  ngOnDestroy() {
    console.log('NG ON DESTROY');
  }

  closePopup() {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
