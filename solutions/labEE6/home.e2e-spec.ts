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

  it('should display 8 license plates', () => {
    page.getAllLicensePlates().then((items) => {
      expect(items.length).toEqual(8);
    });
  });

  it('should display the right titles for all license plates', () => {
    page.getAllLicensePlates().then((items) => {
      expect(page.getLicensePlateTitle(items[0])).toEqual('2008 Georgia license plate');
      expect(page.getLicensePlateTitle(items[1])).toEqual('2015 New Jersey license plate');
      expect(page.getLicensePlateTitle(items[2])).toEqual('2013 California My Tahoe license plate');
      expect(page.getLicensePlateTitle(items[3])).toEqual('2010 Colorado license plate');
      expect(page.getLicensePlateTitle(items[4])).toEqual('2017 Florida license plate');
      expect(page.getLicensePlateTitle(items[5])).toEqual('2014 Utah license plate');
      expect(page.getLicensePlateTitle(items[6])).toEqual('2016 New York license plate');
      expect(page.getLicensePlateTitle(items[7])).toEqual('2007 Pennsylvania license plate');
    });
  });

  it('should display the right prices for all license plates', () => {
    page.getAllLicensePlates().then((items) => {
      expect(page.getLicensePlatePrice(items[0])).toEqual('$11.2');
      expect(page.getLicensePlatePrice(items[1])).toEqual('$15.4');
      expect(page.getLicensePlatePrice(items[2])).toEqual('$12.6');
      expect(page.getLicensePlatePrice(items[3])).toEqual('$7');
      expect(page.getLicensePlatePrice(items[4])).toEqual('$14');
      expect(page.getLicensePlatePrice(items[5])).toEqual('$14');
      expect(page.getLicensePlatePrice(items[6])).toEqual('$12.6');
      expect(page.getLicensePlatePrice(items[7])).toEqual('$15.4');
    });
  });

  it('should display prices in euros when currency is switched to EUR', () => {
    page.selectCurrency('EUR');
    page.getAllLicensePlates().then((items) => {
      expect(page.getLicensePlatePrice(items[0])).toEqual('11.2€');
      expect(page.getLicensePlatePrice(items[1])).toEqual('15.4€');
      expect(page.getLicensePlatePrice(items[2])).toEqual('12.6€');
      expect(page.getLicensePlatePrice(items[3])).toEqual('7€');
      expect(page.getLicensePlatePrice(items[4])).toEqual('14€');
      expect(page.getLicensePlatePrice(items[5])).toEqual('14€');
      expect(page.getLicensePlatePrice(items[6])).toEqual('12.6€');
      expect(page.getLicensePlatePrice(items[7])).toEqual('15.4€');
    });
  });
});
