import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ConsultLawyerComponent } from './consult-lawyer/consult-lawyer.component';
import { LawyerProfileComponent } from './lawyer-profile/lawyer-profile.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PaymentComponent } from './payment/payment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ImportModule } from './import.module';
import { MatDialogModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    ConsultLawyerComponent,
    LawyerProfileComponent,
    AppointmentComponent,
    PaymentComponent,
    DocumentUploadComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule,
    ImportModule,
    MatDialogModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class HomeModule { }
