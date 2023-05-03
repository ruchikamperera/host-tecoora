import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/services/appointment.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  lawyers: any;
  isEmpty: boolean;
  filterValue: Array<any> = [];
  page: number;
  userId: string;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    this.getLawyerListFromAppointments();
  }

  getLawyerListFromAppointments(){
    let requestBody = {
      studentId: this.userId
    }
    this.appointmentService.getAppointmentsByStatusOrLawyerId(requestBody).subscribe(res => {
      if (!res.data?.length) {
        this.isEmpty = true;
      }
      console.log(res, "appointment list");
      let user = []
      user = res.data;
      
      let result = user.filter((item, i, arr) => arr.findIndex((t) => t.lawyerId=== item.lawyerId) === i);

      this.lawyers = result;
      this.filterValue = this.lawyers;
    })
  }

  filterByText(initial: string) {
    this.lawyers = this.filterValue;
    this.lawyers = this.lawyers.filter(i => i.user.firstName.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
    console.log(this.lawyers);
  }

}
