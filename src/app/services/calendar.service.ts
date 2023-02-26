import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../models/appointment.interface';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private appointments: Appointment[] = [];
  private appointmentsSubject = new BehaviorSubject<Appointment[]>(
    this.appointments
  );

  constructor() {}

  getCalendarData(): Observable<Appointment[]> {
    return this.appointmentsSubject.asObservable();
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    this.appointmentsSubject.next(this.appointments);
  }

  deleteAppointment(appointment: Appointment) {
    const index = this.appointments.indexOf(appointment);
    if (index >= 0) {
      this.appointments.splice(index, 1);
      this.appointmentsSubject.next(this.appointments);
    }
  }

  moveAppointment(appointment: Appointment, date: Date) {
    appointment.date = date;
    this.appointmentsSubject.next(this.appointments);
  }

  getAppointments(date: Date): Appointment[] {
    return this.appointments.filter(
      (appointment) => appointment.date.toDateString() === date.toDateString()
    );
  }
}
