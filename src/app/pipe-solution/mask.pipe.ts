import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, mask = '*', count = 6): any {
    if (value) {
      return Array(count+1).join(mask).concat(value.substr(-4));
    } else {
      return '';
    }
  }
}

// Use case example: {{ '0123456789' | mask: '*': 10}}
