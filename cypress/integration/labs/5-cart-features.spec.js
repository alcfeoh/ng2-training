describe('Cart features', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('get an appropriate message on the cart page when cart is empty', () => {
        // TODO: Navigate to the cart page and check that a message saying "Your cart is empty" shows up
    });

    it('can add a plate to the cart', () => {
        // TODO: On the home page click on the "Add to cart" button of the California license plate
        // TODO: Then navigate to the cart page, make sure that the "empty cart"  message is not displayed anymore
        // TODO: Make sure that the California license plate shows up on that page, and that its button now reads "Remove from cart"
    });

    it('can remove a plate from the cart', () => {
        // TODO: On the home page click on the "Add to cart" button of the California license plate
       // TODO: Go to the cart page and  click the "Remove from cart" button of the California license plate
       // TODO: Make sure the license plate is gone from the cart (it does not show up anymore)
       // TODO: Check that the message saying "Your cart is empty" shows up again
    });

});
