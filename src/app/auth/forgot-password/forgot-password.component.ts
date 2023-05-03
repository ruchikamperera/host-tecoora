import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Regex } from 'src/app/enum/common';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup;
  errorMessage: string;
  isSubmit: boolean;
  codeForm: FormGroup;
  user: any;
  passwordForm: FormGroup;
  email: any;
  
  constructor(private router: Router, private route: ActivatedRoute, private loginBuilder: FormBuilder,
    private userService: UserService, public toaster : ToastrService) { }

	// On SignIn link click
	onSignIn() {
	  this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
	}


  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.emailForm = this.loginBuilder.group({
      email: ['', [Validators.required, Validators.pattern(Regex.emailValidation)]],
    });
    this.codeForm = this.loginBuilder.group({
      code: ['', [Validators.required]],
    });
  }

  checkUserExist(){
    let email = {
      email: this.emailForm.value.email
    }
    this.email = this.emailForm.value.email;
    this.userService.getUsersByType(email).subscribe(res => {
      if(res.data.length){
        if(res.data.authType=="tecoora"){
          this.sendOTP();
          this.errorMessage = "";
          this.isSubmit = true;
        }else {
          this.toaster.error(
            Message.toasterInvalidAuthType,
            Message.toasterFailure,
            {
              timeOut: Message.toasterTimeout,
            }
          );
          this.router.navigate(['/auth/sign-in']);
        }
        
      }else {
        this.isSubmit = false;
        this.toaster.error(
          Message.toasterNotExistEmail,
          Message.toasterFailure,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      }
      //this.emailForm.reset();
    })
  }

  sendOTP(){
    this.userService.emailSendOtp(this.emailForm.value.email).subscribe(res => {
      this.toaster.success(
        Message.toasterSendOtp,
        Message.toasterSuccess,
        {
          timeOut: Message.toasterTimeout,
        }
      );
    })
  }

  checkCodeValid(){
    let user = {
      email: this.email,
      otp: this.codeForm.value.code
    }
    this.userService.getUsersByType(user).subscribe(res => {
      if(res.data.length){
        this.user = res.data[0];
        if(this.user.email ==this.email){
          this.toaster.success(
            Message.toasterOtpValid,
            Message.toasterSuccess,
            {
              timeOut: Message.toasterTimeout,
            }
          );
          this.router.navigate(['confirm-password'], { relativeTo: this.route.parent, state: { user: JSON.stringify(this.user) } });

        }else {
          this.toaster.error(
            Message.toasterNotExistOtp,
            Message.toasterFailure,
            {
              timeOut: Message.toasterTimeout,
            }
          );
        }
        
        
      }else {
        this.toaster.error(
          Message.toasterNotExistOtp,
          Message.toasterFailure,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      }
      this.codeForm.reset();
    })
  }

}
