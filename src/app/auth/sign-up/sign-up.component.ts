import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Regex, UserRole } from 'src/app/enum/common';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  minDate: string; //these values passes as String
  maxDate: string;
  signupForm: FormGroup;
  isSubmit: boolean;
  firstName: any;
  lastName: any;
  loginForm: any;
  email: any;
  dateOfBirth: any;
  password: any;
  confirmPassword: any;
  show = false;
  showConfirm = false;
  isMatching = true;
  interval: any;
  userType: any;
  userTypeName: any;
  showPassword: string;
  showConfirmPassword: string;
  inputDate: Date;

  constructor(private router: Router, private route: ActivatedRoute, private loginBuilder: FormBuilder, public userService: UserService, public toaster : ToastrService) {   
    // set the maximum date
    this.maxDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.showPassword = 'password';
    this.showConfirmPassword = 'password';
    this.createForm();
  }

  createForm(): void {
    this.signupForm = this.loginBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern(Regex.emailValidation)]],
      dateOfBirth: ['', [Validators.required, this.maxDateValidator.bind(this)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  maxDateValidator(control) {
    const dateObject = control.value;
    this.inputDate = new Date(dateObject.year, dateObject.month - 1, dateObject.day);
    const maxDate = new Date(this.maxDate);
    return this.inputDate <= maxDate ? null : { maxDate: true };
  }

  getFormValues() {
    this.firstName = this.signupForm.controls['firstName'].value;
    this.lastName = this.signupForm.controls['lastName'].value;
    this.email = this.signupForm.controls['email'].value;
    this.dateOfBirth = this.inputDate;
    this.password = this.signupForm.controls['password'].value;
    this.confirmPassword = this.signupForm.controls['confirmPassword'].value;
  }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
  }

  onShowPassword(){
    if (this.showPassword === 'password') {
      this.showPassword = 'text';
      this.show = true;
    } else {
      this.showPassword = 'password';
      this.show = false;
    }
  }

  onShowConfirmPassword(){
    if (this.showConfirmPassword === 'password') {
      this.showConfirmPassword = 'text';
      this.showConfirm = true;
    } else {
      this.showConfirmPassword = 'password';
      this.showConfirm = false;
    }
  }

  matchPassword() {
    if ((this.signupForm.controls['password'].value === this.signupForm.controls['confirmPassword'].value)) {
      this.isMatching = true;
    } else if (this.signupForm.controls['password'].value !== this.signupForm.controls['confirmPassword'].value) { 
      this.isMatching = false;
    }
  }

  keyup(event) {
    clearInterval(this.interval);
    this.interval = setTimeout(() => {
      this.matchPassword();
    }, 1000);
  }

  signUp() {
    console.log(this.signupForm);
    this.isSubmit = true;
    this.getFormValues();
    let body  = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dob: this.inputDate,
      password: this.password,
      userType: UserRole.Student,
      confirmPassword: this.password,
      authType: "tecoora"
    }

    this.userService.signUpUser(body).subscribe(res => {
      if(res.success === true){
        this.toaster.success(
          Message.toasterSignUpSuccess,
        );
      }else{
        this.toaster.error(
          Message.toasterFailure,
        );
      }      
      this.router.navigate(['auth/sign-in']);
    })
  }
}
