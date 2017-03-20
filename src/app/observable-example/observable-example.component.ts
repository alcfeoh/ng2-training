import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable-example',
  template: ``
})
export class ObservableExampleComponent {

  constructor() {

    console.log("Creating observable");
    let observable = new Observable<string>((observer) => {
      let i = 0;
      // The observable will return a new value every two seconds
      setInterval(() => observer.next("Eureka "+ i++), 2000);
    });
    console.log("Observable created");

    observable.subscribe((data) => {
      console.log("Got data from the observable >>>>> "+ data);
    });

    console.log("Observable.subscribe called");
  }
}
