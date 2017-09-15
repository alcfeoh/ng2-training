import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenUppercase'
})
export class EvenUppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = "";
    for (var i in value){
      if (parseInt(i) % 2 == 0){
        res += value[i].toUpperCase();
      }else{
        res += value[i];
      }
    }
    return res;
  }

}
