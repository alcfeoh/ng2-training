import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';
import {StoreHomePage} from './home.po';

export class StoreCheckoutPage {

  navigateTo() {
    return browser.get('/checkout');
  }

  isLogInFormDisplayed() {
    return element(by.buttonText('Sign in')).isPresent();
  }

  isCheckoutFormDisplayed() {
    return element(by.buttonText('Submit')).isPresent();
  }

  isLoginLinkDisplayed() {
    return element(by.linkText('Login')).isPresent();
  }

  logIn(username: string, password: string) {
    element(by.id('inputEmail')).sendKeys('admin');
    element(by.id('inputPassword')).sendKeys('test');
    return element(by.buttonText('Sign in')).click();
  }

  clickNavigationLinkToCheckout() {
    return element(by.linkText('Checkout')).click();
  }

  enterZipcode(zipcode: string) {
    element(by.name('zip')).clear();
    return element(by.name('zip')).sendKeys(zipcode);
  }

  enterCreditCardNumber(cc: string) {
    element(by.name('cc')).clear();
    return element(by.name('cc')).sendKeys(cc);
  }

  getErrorMessages() {
    return element.all(by.css('.alert.alert-danger')).getText();
  }
}
