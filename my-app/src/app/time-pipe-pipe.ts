import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value: string | Date | null | undefined): string {
    if (!value) return 'Invalid time value';

    let date: Date;

    // Convert string to Date if necessary
    if (typeof value === 'string') {
      date = new Date(`1970-01-01T${value}`);
    } else {
      date = value;
    }

    if (isNaN(date.getTime())) {
      return 'Invalid date value'; // Invalid date
    }

    // Format to HH:mm using Intl API
    return new Intl.DateTimeFormat('pt-PT', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date);
  }
}
