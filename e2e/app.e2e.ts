import { YourappPage } from './app.po';

describe('yourapp App', function() {
  let page: YourappPage;

  beforeEach(() => {
    page = new YourappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yourapp works!');
  });
});
