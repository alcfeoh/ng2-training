import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  constructor() {}

  getList() {
    return [
      { "firstName": "Bradley", "lastName": "Farmer" },
      { "firstName": "Cathryn", "lastName": "Maldonado"},
      { "firstName": "John","lastName": "Cooper" },
      { "firstName": "Reid", "lastName": "Campos" },
      { "firstName": "Iva", "lastName": "Briggs" },
      { "firstName": "Vera", "lastName": "Byers" }
    ];
  }

}
