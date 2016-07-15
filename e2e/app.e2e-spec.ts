import { Ng2TrainingPage } from './app.po';

describe('ng2-training App', function() {
  let page: Ng2TrainingPage;

  beforeEach(() => {
    page = new Ng2TrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
