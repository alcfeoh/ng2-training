
import {MaskPipe} from "./mask.pipe";

fdescribe('MaskPipe', () => {

  it('create an instance', () => {
    const pipe = new MaskPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format 123456 to ******3456', () => {
    const pipe = new MaskPipe();
    expect(pipe.transform('123456')).toBe('******3456');
  });

});
