import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.interface';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.scss'],
})
export class FormAppointmentComponent {
  public title!: string;
  public date!: Date;
  public description?: string;

  constructor(private calendarService: CalendarService) {}

  addAppointment() {
    const appointment: Appointment = {
      title: this.title,
      date: this.date,
      description: this.description,
    };
    this.calendarService.addAppointment(appointment);
  }
}
