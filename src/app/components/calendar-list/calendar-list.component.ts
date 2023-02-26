import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
})
export class CalendarListComponent {
  appointments: Appointment[] = [];
  weekdays: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  dates: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.getCalendarData().subscribe((appointments) => {
      this.appointments = appointments;
    });
  }

  deleteAppointment(appointment: Appointment) {
    this.calendarService.deleteAppointment(appointment);
  }

  moveAppointment(appointment: Appointment, date: Date) {
    this.calendarService.moveAppointment(appointment, date);
  }

  getAppointments(date: number): Appointment[] {
    return this.appointments.filter(
      (appointment) => new Date(appointment.date).getDate() === date
    );
  }

  onDrop(event: CdkDragDrop<Appointment[]>) {
    console.log(event.container);
  }
}
