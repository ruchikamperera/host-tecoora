import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isEmpty: boolean;
  staffs: any;
  selectedStaff: any;
  filterValue: Array<any> = [];
  page: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getStaffList();
  }

  getStaffList(){
    let user = {
      userType: "3",
      sortBy: "",
      search: ""
    }
    this.userService.getUsersByType(user).subscribe(res => {
      if(!res.data.length){
        this.isEmpty = true;
        console.log(this.isEmpty,'empty');
      }
        this.staffs = res.data;
        this.filterValue = this.staffs;
    })
  }

  filterByText(initial: string) {
    this.staffs = this.filterValue;
    this.staffs = this.staffs.filter(i => i.firstName.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
    console.log(this.staffs);
  }

  staffDetails(staff: any){
    console.log(staff,'selected staff');
    if(staff.dob){
      staff.dob = staff.dob.split('T')[0];
      console.log(staff.dob.split('T')[0]);
    }
    this.selectedStaff = staff;
  }


}
