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
    element(by.linkText('Checkout')).click();
  }
}
