describe('Checkout features', () => {

    beforeEach(() => {
        cy.server();
        cy.route('/rates', {EUR: 1.5, GBP: 2}).as('rates');
        cy.route('/plates', 'fixture:plates.json').as('plates');
        cy.route('POST', '/checkout', {result: 'OK'}).as('checkout');
        cy.visit('/');
        cy.wait('@rates');
        cy.wait('@plates');
    });

    it('hides the submit button as long as the checkout form is invalid', () => {
        cy.contains('Checkout').click();
        cy.contains('Submit').should('not.be.visible');
        cy.get("[name='firstname']").type('Alain');
        cy.get("[name='lastname']").type('Chautard');
        cy.contains('Submit').should('not.be.visible');
        cy.get("[name='zip']").type('95742');
        cy.get("[name='cc']").type('45678901234567890');
        cy.contains('Submit').should('be.visible');
    });

    it('displays an error message when an invalid zipcode is entered', () => {
        cy.contains('Checkout').click();
        cy.get("[name='zip']").type('123').blur();
        cy.get("[name='zip']").should('have.class', 'ng-invalid');
        cy.contains('Please enter a 5-digit zipcode').should('be.visible');
        cy.get("[name='zip']").type('45').should('have.class', 'ng-valid');
        cy.contains('Please enter a 5-digit zipcode').should('not.be.visible');
    });

    it('makes a request to the server upon form submission', () => {
        cy.contains('Checkout').click();
        cy.get("[name='firstname']").type('Alain');
        cy.get("[name='lastname']").type('Chautard');
        cy.get("[name='zip']").type('95742');
        cy.get("[name='cc']").type('45678901234567890');
        cy.contains('Submit').should('be.visible').click();
        cy.wait('@checkout').then(result => {
            cy.wrap(result.responseBody).should('be.deep.equal',  {result: 'OK'})
        });
    });

});
