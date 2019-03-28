import { browser, element, by } from 'protractor';

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
}
