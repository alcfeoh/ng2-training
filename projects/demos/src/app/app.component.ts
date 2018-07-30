import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demos';

  url: Observable<string>;

  constructor(public route: ActivatedRoute){
    this.url  = route.url.pipe(map(segments => segments.join('')));
  }
}
