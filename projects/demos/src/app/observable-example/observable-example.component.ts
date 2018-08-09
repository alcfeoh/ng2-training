import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable-example',
  template: `
    <ul>
      <li *ngFor="let message of messages">{{message}}</li>
    </ul>
  `
})
export class ObservableExampleComponent {

  messages = [];

  constructor() {
      this.messages.push("Creating observable");

      let observable = new Observable<string>((observer) => {
        let i = 0;
        // The observable will return a new value every two seconds
        setInterval(() => observer.next("Eureka "+ i++), 2000);
      });

      this.messages.push("Observable created");

      observable.subscribe((data) => {
        this.messages.push("Got data from the observable >>>>> "+ data);
      });
      
      this.messages.push("Observable.subscribe called");
  }
}
