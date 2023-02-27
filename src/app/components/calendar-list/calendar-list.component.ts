import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { APPOITMENT_REG_EXP } from 'src/app/shared/constants/regex';
import { WEEKDAYS } from 'src/app/shared/constants/weekdays';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
})
export class CalendarListComponent {
  appointments: Appointment[] = [];
  weekdays: string[] = WEEKDAYS;
  dates: number[] = [];

  constructor(
    private calendarService: CalendarService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.calendarService.getCalendarData().subscribe((appointments) => {
      this.appointments = appointments;
    });
    this.dates = this.dateService.generateDates();
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
    const appointment = event.container.data[0];
    const droppedDate =
      +(event.event.target as HTMLElement).id.replace(APPOITMENT_REG_EXP, '') +
      1;
    const newDate = new Date();
    const date = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      droppedDate
    );
    this.moveAppointment(appointment, date);
  }
}
