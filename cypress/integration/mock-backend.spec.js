describe('It should work offline ', () => {

  it('displays 8 license plates', () => {
      cy.server();
      cy.route('/demos/angular/rates.php', {EUR: 1.5, GBP: 2}).as('rates');
      cy.route('/demos/angular/plates.php', 'fixture:plates.json').as('plates');
      cy.visit('http://localhost:4200');
      cy.wait('@plates');
  });

});
