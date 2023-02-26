import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CalendarListComponent } from './calendar-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CalendarListComponent],
  imports: [CommonModule, MatIconModule, DragDropModule],
  exports: [CalendarListComponent],
})
export class CalendarListModule {}
