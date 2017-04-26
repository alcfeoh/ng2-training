import { NgTrainingPage } from './app.po';

describe('ng-training App', () => {
  let page: NgTrainingPage;

  beforeEach(() => {
    page = new NgTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello Angular');
  });
});
