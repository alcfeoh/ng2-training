import { CurrencyRendererPipe } from './currency-renderer.pipe';
import {CurrencyService} from './currency.service';

describe('CurrencyRendererPipe', () => {

    const service =  new CurrencyService();
    const pipe = new CurrencyRendererPipe(service);

    it('create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('should format USD amounts properly', () => {
      spyOn(service, 'getCurrency').and.returnValue('USD');
      expect(pipe.transform(12.558)).toBe('$12.56');
    });

    it('should format EUR amounts properly', () => {
      spyOn(service, 'getCurrency').and.returnValue('EUR');
      expect(pipe.transform(12.558)).toBe('12.56€');
    });

    it('should change the rate of EUR amounts properly', () => {
      spyOn(service, 'getCurrency').and.returnValue('EUR');
      expect(pipe.transform(12.558, 1.5)).toBe('18.84€');
    });
});
