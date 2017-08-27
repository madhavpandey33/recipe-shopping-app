import { ShopingListPage } from './app.po';

describe('shoping-list App', () => {
  let page: ShopingListPage;

  beforeEach(() => {
    page = new ShopingListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
