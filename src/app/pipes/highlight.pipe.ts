import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone:true
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchTerm: string): string {
    if (!searchTerm) return value;

    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Create a regex for case insensitive search
    return value.replace(regex, '<span class="bg-warning">$1</span>'); // Wrap matched text with highlight class
  }
}
