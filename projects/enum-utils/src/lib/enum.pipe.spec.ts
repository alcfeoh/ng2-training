import { EnumPipe } from './enum.pipe';

enum Test {This, Should, Work};

describe('EnumPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new EnumPipe();
    expect(pipe.transform(Test)).toEqual(['This', 'Should', 'Work']);
  });
});
