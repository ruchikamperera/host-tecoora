import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex, UserRole } from 'src/app/enum/common';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';
@Component({
  selector: 'app-lawyer-dashboard',
  templateUrl: './lawyer-dashboard.component.html',
  styleUrls: ['./lawyer-dashboard.component.scss']
})
export class LawyerDashboardComponent implements OnInit {
  staffForm: FormGroup;
  firstName: any;
  lastName: any;
  email: any;
  area: any;
  dropdownList = [];
  dropdownSettings:IDropdownSettings={};
  requiredField: boolean ;

  constructor(private staffBuilder: FormBuilder, public userService: UserService, public toaster : ToastrService) { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'appointment handling' },
      { item_id: 2, item_text: 'payment' }
    ]

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
    this.createForm();
    this.setStatus();
  }

  setStatus() {
    (this.staffForm.controls['area'].value.length > 0) ? this.requiredField = true : this.requiredField = false;
  }

  onItemSelect(item: any) {
    this.setClass();
  }
  onSelectAll(items: any) {
    (items.length > 0) ? this.requiredField = true : this.requiredField = false;
  }

  setClass() {
    this.setStatus();
    if (this.staffForm.controls['area'].value.length > 0) { return 'validField' }
    else { return 'invalidField' }
  }

  createForm(): void {
    this.staffForm = this.staffBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern(Regex.emailValidation)]],
      area: [''],
    });
  }

  getFormValues() {
    this.firstName = this.staffForm.controls['firstName'].value;
    this.lastName = this.staffForm.controls['lastName'].value;
    this.email = this.staffForm.controls['email'].value;
    this.area = this.staffForm.controls['area'].value;
  }

  save(){
    this.getFormValues();
    let accessArea = []
    this.area.forEach(element => {
      accessArea.push(element.item_text)
    });
    let body = {
      FirstName: this.firstName,
      LastName: this.lastName,
      UserType: UserRole.Staff,
      Email: this.email,
      accessArea: accessArea
    }
   
    this.staffForm.reset();
    //call staff crate api 
    this.userService.createUser(body).subscribe(res=>{
      this.toaster.success(
        Message.toasterCreateStaff,
        Message.toasterSuccess,
        {
          timeOut: Message.toasterTimeout,
        }
      );
    },error => {
      this.toaster.error(
        Message.toasterCreateStaffError,
        Message.toasterFailure,
        {
          timeOut: Message.toasterTimeout,
        }
      );
    })
  }

}
