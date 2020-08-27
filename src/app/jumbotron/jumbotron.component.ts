import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent  {

  @Input()
  title;

  @Input()
  description;

  constructor() { }
}
