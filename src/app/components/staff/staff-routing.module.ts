import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentCalendarComponent } from '../lawyer/appointment-calendar/appointment-calendar.component';
import { NewAppointmentComponent } from '../lawyer/new-appointment/new-appointment.component';
import { PaymentComponent } from '../home/payment/payment.component';

const routes: Routes = [
  { path: '' , component: StaffDashboardComponent, data: {title: 'Dashboard'} },
  { path: 'appointment-calendar' , component: AppointmentCalendarComponent, data: {title: 'Calendar'}  },
  { path: 'new-appointment' , component: NewAppointmentComponent, data: {title: 'New Appointment'}  },
  { path: 'payment' , component: PaymentComponent, data: {title: 'Payment'}  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
