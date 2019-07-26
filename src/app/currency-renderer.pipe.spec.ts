import { CurrencyRendererPipe } from './currency-renderer.pipe';

fdescribe('CurrencyRendererPipe', () => {

  const pipe = new CurrencyRendererPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('format USD amounts properly', () => {
    expect(pipe.transform(8.00)).toBe('$8');
    expect(pipe.transform(8.55)).toBe('$8.55');
  });

  it('format EUR amounts properly', () => {
    expect(pipe.transform(8.00, 'EUR')).toBe('€8');
    expect(pipe.transform(8.55, 'EUR')).toBe('€8.55');
  });

  it('format GBP amounts properly', () => {
    expect(pipe.transform(8.00, 'GBP')).toBe('£8');
    expect(pipe.transform(8.55, 'GBP')).toBe('£8.55');
  });

  it('should apply exchange rates', () => {
    expect(pipe.transform(8.00, 'GBP', 2.0)).toBe('£16');
    expect(pipe.transform(8.55, 'EUR', 2.0)).toBe('€17.1');

  });

});
