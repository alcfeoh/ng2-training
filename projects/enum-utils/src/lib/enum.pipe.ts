import { Pipe, PipeTransform } from '@angular/core';
import {SmartEnum} from './smart-enum';

@Pipe({
  name: 'enum'
})
export class EnumPipe implements PipeTransform {

  transform(enumType: any): any {
    if (enumType) {
      let smartEnum = new SmartEnum(enumType);
      return smartEnum.getValues();
    }
    return [];
  }
}
