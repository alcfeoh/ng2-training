import { Component, OnInit } from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';

interface State {
  abbreviation: string;
  name: string;
}

@Component({
  selector: 'app-state-filter',
  templateUrl: './state-filter.component.html',
  styleUrls: ['./state-filter.component.css']
})
export class StateFilterComponent {

  states$: Observable<State[]>;
  filteredStates$: Observable<State[]>;
  filter: FormControl;

  constructor(private http: HttpClient) {
    this.states$ = http.get<State[]>('http://localhost:8000/states');
    this.filter = new FormControl('');
    this.filteredStates$ = combineLatest(this.states$, this.filter.valueChanges).pipe(
      map(([states, filterString]) => states.filter(state => state.name.indexOf(filterString) !== -1))
    );
  }

}
