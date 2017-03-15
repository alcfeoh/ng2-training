import { Component } from '@angular/core';
import '../rxjs-operators';
import {Http} from "@angular/http";

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

  constructor(private http: Http) {}

  getFullName(person) {
    return person.name;
  }

  loadData(){
    // Use this method to load data from the following URL:
    // http://interstate21.com/demos/angular/index.php
    this.http.get("http://interstate21.com/demos/angular/index.php")
      .map(res => res.json())
      .subscribe(res => {
        this.persons = res;
      });
  }
}
