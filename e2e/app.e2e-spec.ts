import { NgDesignPage } from './app.po';

describe('ng-design App', () => {
  let page: NgDesignPage;

  beforeEach(() => {
    page = new NgDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
