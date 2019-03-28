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

  addPlateToCart(licensePlateElement: ElementFinder) {
    return licensePlateElement.element(by.css('button')).click();
  }

  selectCurrency(currency: string) {
    element(by.css('app-currency-switcher button')).click();
    element(by.css('app-currency-switcher')).element(by.partialLinkText(currency)).click();

  }
}
