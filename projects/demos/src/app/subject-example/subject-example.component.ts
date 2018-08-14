import { Component } from '@angular/core';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-subject-example',
  template: ``
})
export class SubjectExampleComponent {

  constructor() {

    console.log("Creating subject");
    const subject = new Subject<string>();

    let i = 0;

    setInterval(() => subject.next("Eureka "+ i++), 2000);

    console.log("Subject created");

    subject.asObservable().subscribe((data) => {
      console.log("First subscriber got data >>>>> "+ data);
    });

    const secondSubscription = subject.asObservable().subscribe((data) => {
      console.log("Second subscriber got data >>>>> "+ data);
    });

    setTimeout(() => secondSubscription.unsubscribe(), 7000);
  }
}
