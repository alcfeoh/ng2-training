import { CurrencyRendererPipe } from './currency-renderer.pipe';
import {CurrencyService} from './currency.service';

describe('CurrencyRendererPipe', () => {

    const service =  new CurrencyService();

    it('create an instance', () => {
      const pipe = new CurrencyRendererPipe(service);
      expect(pipe).toBeTruthy();
    });

    it('should format USD amounts properly', () => {
      const pipe = new CurrencyRendererPipe(service);
      spyOn(service, 'getCurrency').and.returnValue('USD');
      expect(pipe.transform(12.558)).toBe('$12.56');
    });

    it('should format EUR amounts properly', () => {
      spyOn(service, 'getCurrency').and.returnValue('EUR');
      const pipe = new CurrencyRendererPipe(service);
      expect(pipe.transform(12.558)).toBe('12.56€');
    });

    it('should change the rate of EUR amounts properly', () => {
      spyOn(service, 'getCurrency').and.returnValue('EUR');
      const pipe = new CurrencyRendererPipe(service);
      expect(pipe.transform(12.558, 1.5)).toBe('18.84€');
    });
});
