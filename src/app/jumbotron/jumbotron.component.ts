import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  @Input()
  title?: string;

  @Input()
  description?: string;

  constructor() { }

}
