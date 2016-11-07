import { Component } from '@angular/core';
import { Http } from '@angular/http';
import '../../rxjs-operators';

@Component({
  selector: 'app-http',
  template: ` 
      <input type="button" class="btn btn-primary" (click)="loadData()" value="Load Data"/>
      <ul>
        <li *ngFor="let person of persons">{{ getFullName(person) }}</li>
      </ul>`

})
export class HttpObservableComponent {

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
