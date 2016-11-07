import { Component } from '@angular/core';
import { Http } from '@angular/http';
import '../../rxjs-operators';

@Component({
  selector: 'app-http-prom',
  template: ` 
      <input type="button" class="btn btn-primary" (click)="loadData()" value="Load Data"/>
      <ul>
        <li *ngFor="let person of persons">{{ getFullName(person) }}</li>
      </ul>`

})
export class HttpPromiseComponent {

  persons = [];

  constructor(private http: Http) {}

  getFullName(person) {
    return person.firstName + " " + person.lastName;
  }

  loadData(){
    this.http.get("http://interstate21.com/demos/angular/index.php")
      .toPromise()
      .then(res => {
        this.persons = res.json();
      });

  }
}
