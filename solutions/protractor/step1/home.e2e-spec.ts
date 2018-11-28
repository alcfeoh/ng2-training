import {StoreHomePage} from './home.po';

describe('License Plate Store home page', () => {
  let page: StoreHomePage;

  beforeEach(() => {
    page = new StoreHomePage();
    page.navigateTo();
  });

  it('should have a page title', () => {
    expect(page.getPageTitle()).toEqual('Angular training');
  });

  it('should have proper text in the header', () => {
    expect(page.getNavHeaderTitle()).toEqual('License Plate Store');
  });
});
