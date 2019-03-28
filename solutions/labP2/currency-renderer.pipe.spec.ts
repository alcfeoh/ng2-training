import { CurrencyRendererPipe } from './currency-renderer.pipe';

describe('CurrencyRendererPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe).toBeTruthy();
  });
});
