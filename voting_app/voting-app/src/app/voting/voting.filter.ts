import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})

export class OrderByPipe implements PipeTransform {
  transform(input:any, args:string[]) : any {
    
    return input;
  }
}
