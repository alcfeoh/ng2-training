import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  imports: [NgIf],
  standalone: true
})
export class DialogComponent implements OnInit {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
