describe('Cart features', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('get an appropriate message on the cart page when cart is empty', () => {
        cy.contains('My cart').click();
        cy.contains('Your cart is empty').should('be.visible');
    });

    it('can add a plate to the cart', () => {
        cy.get(`app-license-plate:nth-of-type(3)`)
            .contains('Add to cart').click();
        cy.contains('My cart').click();
        cy.contains('Your cart is empty').should('not.be.visible');
        cy.checkLicensePlateAt(1, '2013 California My Tahoe license plate', '$9');
        cy.get(`app-license-plate:nth-of-type(1)`).contains('Remove from cart');
    });

    it('can remove a plate from the cart', () => {
        cy.get(`app-license-plate:nth-of-type(3)`)
            .contains('Add to cart').click();
        cy.contains('My cart').click();
        cy.get(`app-license-plate:nth-of-type(1)`).contains('Remove from cart').click();
        cy.get(`app-license-plate`).should('not.be.visible');
        cy.contains('Your cart is empty').should('be.visible');
    });

});
