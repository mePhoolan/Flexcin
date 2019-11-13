import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ux'
})
export class UxPipe implements PipeTransform {

  transform(value: any ,limit:number){
    console.log("this is pipe value ",value)
     return value.substr(0,limit)
  }

}
