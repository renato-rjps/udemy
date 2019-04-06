import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    return value.sort((a, b) => (a.name).localeCompare(b.name));
  }

}
