import {JumbotronComponent} from '../src/app/jumbotron/jumbotron.component';

describe('Jumbotron component tests', () => {

  it('should display Jumbotron component with both title and description', () => {
    cy.mount(`<app-jumbotron>
              </app-jumbotron>
    `, {declarations: [JumbotronComponent]});
    cy.contains("Title");
  })

})
