import {StoreHomePage} from './home.po';
import {StoreCartPage} from './cart.po';
import {StoreCheckoutPage} from './checkout.po';

fdescribe('License Plate Store checkout page', () => {
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

});
