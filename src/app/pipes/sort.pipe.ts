import { Pipe, PipeTransform } from '@angular/core';
import {Servers} from "../models/servers";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: Servers[]): Servers[] {
    return value.sort((a: Servers , b: Servers) => a.name > b.name && 1 || -1);
  }
}
