import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  dates: number[] = [];

  generateDaysInMonth(): number {
    return new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();
  }

  generateDates(): number[] {
    return Array.from(
      { length: this.generateDaysInMonth() },
      (_, index) => index + 1
    );
  }
}
