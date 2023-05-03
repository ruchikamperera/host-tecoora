import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lawyer-profile',
  templateUrl: './lawyer-profile.component.html',
  styleUrls: ['./lawyer-profile.component.scss']
})
export class LawyerProfileComponent implements OnInit {
  user: any;

  constructor(public route: Router, public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  redirectAppointment(){
    this.route.navigateByUrl('/dashboard/appointment');
    
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      res => {
        console.log(res,'user');
      }
    )
    this.user = {
      Id : 1,
      FirstName : "chathura",
      LastName : "Ravisankha",
      UserType: "Lawyer",
      Email: "chathurasika9591@gmail.com",
      CompanyName : "Tecoora",
      DOB: Date,
      StudentType: "RT",
      State: "southern",
      noOfReviews: 100,
      yearsOfExperience: 3

    }
  }

}
