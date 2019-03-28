import {StoreHomePage} from './home.po';
import {StoreCartPage} from './cart.po';
import {StoreCheckoutPage} from './checkout.po';

describe('License Plate Store checkout page', () => {
  let checkoutPage: StoreCheckoutPage;
  let homePage: StoreHomePage;

  beforeAll(() => {
    checkoutPage = new StoreCheckoutPage();
    homePage = new StoreHomePage();
  });

  it('should redirect to login screen by default', async() => {
    await checkoutPage.navigateTo();
    expect(checkoutPage.isLogInFormDisplayed()).toBeTruthy();
  });

  it('should be possible to get to the checkout form once signed in', async() => {
    await checkoutPage.logIn('admin', 'test');
    checkoutPage.clickNavigationLinkToCheckout();
    expect(checkoutPage.isLogInFormDisplayed()).toBeFalsy();
    expect(checkoutPage.isLoginLinkDisplayed()).toBeFalsy();
    expect(checkoutPage.isCheckoutFormDisplayed()).toBeTruthy();
  });

  it('should display an error when zipcode is not valid', async() => {
    await checkoutPage.enterZipcode('abcete');
    let errors = await checkoutPage.getErrorMessages();
    expect(errors).toContain('Please enter a 5-digit zipcode');
    await checkoutPage.enterZipcode('123');
    errors = await checkoutPage.getErrorMessages();
    expect(errors).toContain('Please enter a 5-digit zipcode');
  });

  it('should not display an error when zipcode is valid', async() => {
    await checkoutPage.enterZipcode('95742');
    let errors = await checkoutPage.getErrorMessages();
    expect(errors).not.toContain('Please enter a 5-digit zipcode');
  });

  it('should display an error when credit card number is not from a valid provider', async() => {
    await checkoutPage.enterCreditCardNumber('1234567891234567');
    let errors = await checkoutPage.getErrorMessages();
    expect(errors).toContain('Your credit card number is not from a supported credit card provider');
  });

  it('should NOT display an error when credit card number is from a valid provider', async() => {
    await checkoutPage.enterCreditCardNumber('4234567891234567');
    let errors = await checkoutPage.getErrorMessages();
    expect(errors).not.toContain('Your credit card number is not from a supported credit card provider');
  });

  it('should display an error when credit card number is not 16-digit long', async() => {
    await checkoutPage.enterCreditCardNumber('12345');
    let errors = await checkoutPage.getErrorMessages();
    expect(errors).toContain('Please enter a 16-digit credit card number');
  });

  it('should NOT display an error when credit card number is 16-digit long', async() => {
    await checkoutPage.enterCreditCardNumber('4234567891234567');
    let errors = await checkoutPage.getErrorMessages();
    expect(errors).not.toContain('Please enter a 16-digit credit card number');
  });

});
