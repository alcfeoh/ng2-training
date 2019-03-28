import {StoreHomePage} from './home.po';
import {StoreCartPage} from './cart.po';

describe('License Plate Store cart page', () => {
  let cartPage: StoreCartPage;
  let homePage: StoreHomePage;

  beforeEach(() => {
    cartPage = new StoreCartPage();
    homePage = new StoreHomePage();
  });

  it('should display a message saying "Your cart is empty" by default', async() => {
    await cartPage.navigateTo();
    expect(cartPage.getWarningMessage().getText()).toEqual('Your cart is empty');
  });

  it('should display the license plates added to the cart if any', async() => {
    await homePage.navigateTo();
    let plates = await homePage.getAllLicensePlates();
    let newJerseyPlate = plates[1];
    homePage.addPlateToCart(newJerseyPlate);
    await cartPage.navigateTo();
    expect(cartPage.getWarningMessage().isPresent()).toBeFalsy();
    let cartPlates = await cartPage.getAllLicensePlates();
    expect(cartPage.getLicensePlateTitle(cartPlates[0])).toBe('2015 New Jersey license plate');
    expect(cartPage.getLicensePlatePrice(cartPlates[0])).toBe('$15.4');
  });

  it('should be possible to remove plates from the cart', async() => {
    await cartPage.navigateTo();
    let cartPlates = await cartPage.getAllLicensePlates();
    cartPage.removeFromCart(cartPlates[0]);
    expect(cartPage.getWarningMessage().getText()).toEqual('Your cart is empty');
  });
});
