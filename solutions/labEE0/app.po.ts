import { browser, element, by } from 'protractor';

export class NgTrainingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  getParagraphFontSize() {
    return element(by.css('app-root h2')).getCssValue('font-size');
  }
}
