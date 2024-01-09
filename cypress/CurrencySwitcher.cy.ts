import {CurrencySwitcherComponent} from '../src/app/currency-switcher/currency-switcher.component';
import {HttpClientModule} from '@angular/common/http';

describe('CurrencySwitcher component tests', () => {

  it('should allow the user to switch to a different currency', () => {
    // If we don't mock that HTTP request, the test fails because the service throws an error
    //cy.intercept('/rates', {GBP: 2, EUR: 3, USD: 1});
    cy.mount(`
              <app-currency-switcher>
              </app-currency-switcher>
    `, {
      declarations: [CurrencySwitcherComponent],
      imports: [HttpClientModule]
    });
    cy.get('button').click();
    cy.contains("EUR (€)").click();
    cy.contains("USD ($)").should("not.be.visible");
    cy.contains("GBP (£)").should("not.be.visible");
    cy.contains("EUR (€)").should("not.be.visible");
  });

});
