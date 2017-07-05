import { EvenUppercasePipe } from './even-uppercase.pipe';

fdescribe('EvenUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new EvenUppercasePipe();
    expect(pipe).toBeTruthy();
  });

});
