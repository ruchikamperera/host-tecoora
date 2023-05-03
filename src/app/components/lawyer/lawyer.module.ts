import { DocumentSelectComponent } from './document-select/document-select.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { LawyerDashboardComponent } from './lawyer-dashboard/lawyer-dashboard.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawyerRoutingModule } from './lawyer-routing.module';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgbDatepickerModule, NgbModalModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadedDocumentsComponent } from './uploaded-documents/uploaded-documents.component';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ImgPdfViewerModule } from 'img-pdf-viewer';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportModule } from './import.module';
import { MatDialogModule } from '@angular/material';
import { PointsCalculatorComponent } from './points-calculator/points-calculator.component';

@NgModule({
  declarations: [
    LawyerDashboardComponent,
    AppointmentCalendarComponent,
    NewAppointmentComponent,
    StudentFormComponent,
    UploadedDocumentsComponent,
    PointsCalculatorComponent,
    DocumentSelectComponent
  ],
  imports: [
    CommonModule,
    LawyerRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    HttpClientModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgxDocViewerModule,
    ImgPdfViewerModule,
    SharedModule,
    ImportModule,
    MatDialogModule
  ]
})
export class LawyerModule { }
