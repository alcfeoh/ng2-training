import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';
import {StoreHomePage} from './home.po';

export class StoreCartPage extends StoreHomePage {

  navigateTo() {
    return browser.get('/cart');
  }

  getWarningMessage() {
    return element(by.css('.alert.alert-info'));
  }

  removeFromCart(licensePlateElement: ElementFinder) {
    licensePlateElement.element(by.css('button')).click();
  }
}
