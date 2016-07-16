import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
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
    return person.firstName + " " + person.lastName;
  }

  loadData(){
    this.http.get("http://interstate21.com/demos/angular/index.php")
      .map(res => res.json())
      .subscribe(res => {
        this.persons = res;
      });
  }
}
