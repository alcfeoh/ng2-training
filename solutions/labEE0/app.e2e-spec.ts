import { NgTrainingPage } from './app.po';

describe('ng-training App', () => {
  let page: NgTrainingPage;

  beforeEach(() => {
    page = new NgTrainingPage();
  });

  it('should display message saying Hello Angular', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello Angular');
    expect(page.getParagraphFontSize()).toEqual('32px');
  });
});
