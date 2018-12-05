import {browser, element, by, ExpectedConditions} from 'protractor';
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


  enterFirstName(firstname: string) {
    element(by.name('firstname')).clear();
    return element(by.name('firstname')).sendKeys(firstname);
  }

  enterCreditCardNumber(cc: string) {
    element(by.name('cc')).clear();
    return element(by.name('cc')).sendKeys(cc);
  }

  getErrorMessages() {
    return element.all(by.css('.alert.alert-danger')).getText();
  }

  clickSubmit() {
    return element(by.buttonText('Submit')).click();
  }

   async getConfirmationPopupTitle() {
    const popup = element(by.tagName('app-popup-window h2'));
    browser.wait(ExpectedConditions.presenceOf(popup), 3000);
    browser.sleep(100);
    return await popup.getText();
  }

  closeConfirmationPopup() {
    return element(by.tagName('app-popup-window span.close')).click();
  }


}
