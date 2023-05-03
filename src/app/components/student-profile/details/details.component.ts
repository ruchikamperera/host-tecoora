import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentPointFormService } from 'src/app/shared/services/student-point-form.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  studentId: any;
  selectedStudent: any;
  sessions: any;
  isEmptySessions: boolean;
  constructor(private router: Router, 
    private userService: UserService,
    private studentPointFormService: StudentPointFormService) {
    if (this.router.getCurrentNavigation().extras.state == null) {
      this.router.navigate(['/student-profile']);
    } else {
      this.studentId = this.router.getCurrentNavigation().extras.state?.id;
    }
   }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails(){
    this.userService.getUserById(this.studentId).subscribe(res => {
      this.selectedStudent = res.data;
      if(this.selectedStudent.dob){
        this.selectedStudent.dob = this.selectedStudent.dob.split('T')[0]
      }
      this.getAttempts(this.studentId);
    })
  }

  getAttempts(selectedStudent: any){
    this.studentPointFormService.getStudentForms(selectedStudent).subscribe(res => {
      this.sessions = res.data;
      if(this.sessions.length == 0){
        this.isEmptySessions = true;
      }else {
        this.isEmptySessions = false;
      }
    })
  }

  loadPointForm(session: any){
    this.router.navigateByUrl('/student-profile/point-form', { state: { session:JSON.stringify(session) } });
  }

}
