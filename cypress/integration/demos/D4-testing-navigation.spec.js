describe('License plate store home page', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('displays the right main title', () => {
        cy.contains('Welcome to our store')
            .should('be.visible')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-size', '72px')
            .and('have.css', 'font-family').and('match', /Segoe UI/);
    });

    it('displays 8 license plates', () => {
        cy.get('app-license-plate').should('have.length', 8);
    });

    it('can navigate to the cart page', () => {
        cy.contains('My cart').click();
        cy.contains('My Cart').should('be.visible');
        cy.contains('Your current cart contents').should('be.visible');
    });

    it('can navigate to the checkout page', () => {
        cy.contains('Checkout').click();
        cy.contains('Enter your personal information to complete your order').should('be.visible');
    });
});
