export class YourappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yourapp-app h1')).getText();
  }
}
