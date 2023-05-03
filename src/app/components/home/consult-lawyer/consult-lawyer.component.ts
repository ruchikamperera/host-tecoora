import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-lawyer',
  templateUrl: './consult-lawyer.component.html',
  styleUrls: ['./consult-lawyer.component.scss']
})
export class ConsultLawyerComponent implements OnInit {
  search: string;
  selected = "lawyer";
  users : any[];
  sort: string;
  constructor(public route: Router, public userService: UserService ) { }

  ngOnInit(): void {
    this.search="";
    this.sort="";
    this.getUsers();
  }

  onSelected(value:string): void {
		this.sort = value;
    this.getUsers();
	}
getUsers(){
  let body = {
    UserType : this.selected,
    sortBy: this.sort,
    searh:this.search
  }

  // this.userService.getUsersByType(body).subscribe(res => {});
  console.log(body, 'response body');
    this.users = [{
      Id : 1,
      FirstName : "chathura",
      LastName : "Ravisankha",
      UserType: "Lawyer",
      Email: "chathurasika9591@gmail.com",
      CompanyName : "Tecoora",
      DOB: new Date(),
      StudentType: "RT",
      State: "southern",
      noOfReviews: 100,
      yearsOfExperience: 3

    },
    {
      Id : 2,
      FirstName : "chathura",
      LastName : "Ravisankha",
      UserType: "Lawyer",
      Email: "chathurasika9591@gmail.com",
      CompanyName : "Tecoora",
      DOB: new Date(),
      StudentType: "RT",
      State: "southern",
      noOfReviews: 100,
      yearsOfExperience: 3
    },
    {
      Id : 3,
      FirstName : "chathura",
      LastName : "Ravisankha",
      UserType: "Lawyer",
      Email: "chathurasika9591@gmail.com",
      CompanyName : "Tecoora",
      DOB: new Date(),
      StudentType: "RT",
      State: "southern",
      noOfReviews: 100,
      yearsOfExperience: 3
    },
    {
      Id : 4,
      FirstName : "chathura",
      LastName : "Ravisankha",
      UserType: "Lawyer",
      Email: "chathurasika9591@gmail.com",
      CompanyName : "Tecoora",
      DOB: new Date(),
      StudentType: "RT",
      State: "southern",
      noOfReviews: 100,
      yearsOfExperience: 3
    }]
    console.log(this.users);

}

  redirectProfile(id:any){
    console.log(id,"clicked")
    this.route.navigateByUrl(`dashboard/lawyer-profile/${id}`);
    
  }

  onClick(option: string) {
    this.selected = option;
    this.getUsers();
  }

  keyup() {
    this.getUsers();
  }

}
