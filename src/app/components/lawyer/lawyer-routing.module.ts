import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { LawyerDashboardComponent } from './lawyer-dashboard/lawyer-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsCalculatorComponent } from './points-calculator/points-calculator.component';

const routes: Routes = [
  { path: '' , component: LawyerDashboardComponent, data: {title: 'Lawyer Dashboard'} },
  { path: 'appointment-calendar' , component: AppointmentCalendarComponent, data: {title: 'Calendar'}  },
  { path: 'new-appointment' , component: NewAppointmentComponent, data: {title: 'New Appointment'}  },
  { path: 'new-appointment/student-form' , component: StudentFormComponent, data: {title: 'Student Form'}  },
  { path: 'points-calculator' , component: PointsCalculatorComponent, data: {title: 'Points Calculator'}  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerRoutingModule { }
