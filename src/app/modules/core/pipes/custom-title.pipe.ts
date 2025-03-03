import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle',
})
export class CustomTitlePipe implements PipeTransform {
  transform(value: string, wordLimit: number = 5): string {
    if (!value) return '';

    const words = value.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : value;
  }
}
