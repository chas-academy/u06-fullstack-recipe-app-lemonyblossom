import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) return ''; // handle null 

    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
  }
}