import { Component } from '@angular/core';
import '../rxjs-operators';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-http',
  template: ` 
      <input type="button" class="btn btn-primary" (click)="loadData()" value="Load Data"/>
      <ul>
        <li *ngFor="let person of persons">{{ getFullName(person) }}</li>
      </ul>`

})
export class HttpComponent {

  persons = [];

  constructor(private http: HttpClient) {}

  getFullName(person) {
    return person.name;
  }

  loadData(){
    // Use this method to load data from the following URL:
    // http://localhost:8080/persons.json
    // In order to serve data on that URL:
    // npm install -g http-server
    // Then go to the 'data' folder of this ng2-training project and run:
    // http-server --cors

  }
}
