import { PointsCalculatorComponent } from '../lawyer/points-calculator/points-calculator.component';
import { PaymentComponent } from './payment/payment.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LawyerProfileComponent } from './lawyer-profile/lawyer-profile.component';
import { ConsultLawyerComponent } from './consult-lawyer/consult-lawyer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';

const routes: Routes = [
  { path: '' , component: StudentDashboardComponent, data: {title: 'Student Dashboard'} },
  { path: 'consult' , component: ConsultLawyerComponent, data: {title: 'Consult Lawyer'}  },
  { path: 'appointment' , component: AppointmentComponent, data: {title: 'Appointment'}  },
  { path: 'payment' , component: PaymentComponent, data: {title: 'Payment'}  },
  { path: 'lawyer-profile/:userId' , component: LawyerProfileComponent, data: {title: 'Lawyer Profile'}  },
  { path: 'document-upload' , component: DocumentUploadComponent, data: {title: 'Document Upload'}  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
