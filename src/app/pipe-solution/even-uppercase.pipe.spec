import { EvenUppercasePipe } from './even-uppercase.pipe';

describe('EvenUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new EvenUppercasePipe();
    expect(pipe).toBeTruthy();
  });

});
