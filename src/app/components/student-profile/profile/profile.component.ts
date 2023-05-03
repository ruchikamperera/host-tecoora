import { Component, OnInit } from '@angular/core';
import { StudentPointFormService } from 'src/app/shared/services/student-point-form.service';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/services/appointment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  students: any;
  isEmpty: boolean;
  selectedStudent: any;
  sessions: any;
  filterValue: Array<any> = [];
  page: number;
  userId: number;
  
  constructor(
    private studentPointFormService: StudentPointFormService,
    private router: Router,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem("userId"));
    this.getStudentListFromAppointment();
  }

  getStudentListFromAppointment(){
    let requestBody = {
      lawyerId: this.userId
    }
    this.appointmentService.getAppointmentsByStatusOrLawyerId(requestBody).subscribe(res => {
      if (!res.data?.length) {
        this.isEmpty = true;
      }
      console.log(res, "appointment list");
      let user = []
      user = res.data;

      
      let result = user?.filter((item, i, arr) => arr.findIndex((t) => t.studentId=== item.studentId) === i);

      this.students = result;
      this.filterValue = this.students;

    })
  }

  filterByText(initial: string) {
    this.students = this.filterValue;
    this.students = this.students.filter(i => i.firstName.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
    console.log(this.students);
  }

  studentDetails(student: any){
    console.log(student,'selected student');
    if(student.dob){
      student.dob = student.dob.split('T')[0]
    }
    this.selectedStudent = student;
    this.router.navigateByUrl('/student-profile/details', { state: { id:student.user.id } });
    this.getAttempts(student.id);
  }

  getAttempts(selectedStudent: any){
    this.studentPointFormService.getStudentForms(selectedStudent).subscribe(res => {
      console.log(res, "attempts");
      this.sessions = res.data;
    })
  }

}
