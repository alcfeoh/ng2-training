import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';

export class StoreHomePage {

  navigateTo() {
    return browser.get('/');
  }

  getNavHeaderTitle() {
    return element(by.css('body > app-root > app-navigation > nav > a')).getText();
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getAllLicensePlates(): ElementArrayFinder {
    return element.all(by.css('app-license-plate'));
  }

  getLicensePlateTitle(licensePlateElement: ElementFinder) {
    return licensePlateElement.element(by.css('h2')).getText();
  }

  getLicensePlatePrice(licensePlateElement: ElementFinder) {
    return licensePlateElement.element(by.css('div > h2')).getText();
  }
}
