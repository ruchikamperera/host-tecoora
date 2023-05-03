import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentHistoryRoutingModule } from './appointment-history-routing.module';
import { HistoryComponent } from './history/history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    AppointmentHistoryRoutingModule,
    NgbModule
  ]
})
export class AppointmentHistoryModule { }
