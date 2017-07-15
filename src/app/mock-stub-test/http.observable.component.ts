import { Component } from '@angular/core';
import { Http } from '@angular/http';
import '../rxjs-operators';

@Component({
  selector: 'app-http-obs',
  template: ` 
      <ul>
        <li *ngFor="let person of persons">{{ getFullName(person) }}</li>
      </ul>`

})
export class HttpObservableComponent {

  persons = [];

  constructor(private http: Http) {
    this.loadData();
  }

  getFullName(person) {
    return person.name;
  }

  loadData(){
    this.http.get("http://interstate21.com/demos/angular/index.php")
      .map(res => res.json())
      .subscribe(res => {
        this.persons = res;
      });
  }
}
