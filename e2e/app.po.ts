import { browser, element, by } from 'protractor';

export class AngularFirstLookHostedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fl-root h1')).getText();
  }
}
