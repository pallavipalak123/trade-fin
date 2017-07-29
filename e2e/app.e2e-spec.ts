import { TradeFinPage } from './app.po';

describe('trade-fin App', () => {
  let page: TradeFinPage;

  beforeEach(() => {
    page = new TradeFinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
