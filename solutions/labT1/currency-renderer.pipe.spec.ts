import { CurrencyRendererPipe } from './currency-renderer.pipe';
import {CurrencyService} from './currency.service';

fdescribe('CurrencyRendererPipe', () => {

    const service = new CurrencyService();

    it('create an instance', () => {
      const pipe = new CurrencyRendererPipe(service);
      expect(pipe).toBeTruthy();
    });

    it('should format USD amounts properly', () => {
      const pipe = new CurrencyRendererPipe(service);
      expect(pipe.transform(12.558)).toBe('$12.56');
    });

    it('should format EUR amounts properly', () => {
      service.setCurrency('EUR');
      const pipe = new CurrencyRendererPipe(service);
      expect(pipe.transform(12.558)).toBe('12.56€');
    });

    it('should change the rate of EUR amounts properly', () => {
      service.setCurrency('EUR');
      const pipe = new CurrencyRendererPipe(service);
      expect(pipe.transform(12.558, 1.5)).toBe('18.84€');
    });
});
