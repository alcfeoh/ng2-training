import {StoreHomePage} from './home.po';

describe('License Plate Store home page', () => {
  let page: StoreHomePage;

  beforeEach(async() => {
    page = new StoreHomePage();
    await page.navigateTo();
  });

  it('should have a page title', async() => {
    let title = await page.getPageTitle();
    expect(title).toEqual('Angular training');
  });

  it('should have the proper text in the header', () => {
    expect(page.getNavHeaderTitle()).toEqual('License Plate Store');
  });
});
