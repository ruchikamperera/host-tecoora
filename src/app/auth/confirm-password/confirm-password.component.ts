import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  user: any;
  interval: any;
  isMatching: boolean = true;;
  isEmpty: boolean = true;

  constructor(private router: Router,  private loginBuilder: FormBuilder,
    private userService: UserService, public toaster : ToastrService, private route: ActivatedRoute) 
    {
      let user = this.router.getCurrentNavigation()?.extras?.state?.user;
      if(user){
        this.user = JSON.parse(user);
      }
       
      if (!this.user) {
        this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
      } 
    }

    ngOnInit(): void {
      this.createForm();
    }

    createForm(): void {
    this.passwordForm = this.loginBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
    }

    // On SignIn link click
    onSignIn() {
      this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
    }

    matchPassword() {
      if ((this.passwordForm.controls['newPassword'].value === this.passwordForm.controls['confirmPassword'].value)&&(this.passwordForm.controls['newPassword'].value != '' && this.passwordForm.controls['confirmPassword'].value != '')) {
        this.isMatching = true;
        this.isEmpty = false;
      } else if (this.passwordForm.controls['newPassword'].value == '' && this.passwordForm.controls['confirmPassword'].value == '') {
        this.isEmpty = true;
        this.isMatching = true;
      } else if (this.passwordForm.controls['newPassword'].value != '' && this.passwordForm.controls['confirmPassword'].value != '') {
        this.isEmpty = false;
        this.isMatching = false;
      } else if (this.passwordForm.controls['newPassword'].value !== this.passwordForm.controls['confirmPassword'].value) { 
        this.isMatching = false;
        this.isEmpty = false;
      }
    }

    keyup(event) {
      clearInterval(this.interval);
      this.interval = setTimeout(() => {
        this.matchPassword();
      }, 1000);
    }

    resetPassword(){ 
      let user = this.user;
      user.password = this.passwordForm.value.newPassword;
      user.confirmPassword = this.passwordForm.value.newPassword;
      this.userService.updateUser(user).subscribe(res => {
        this.toaster.success(
          Message.toasterResetPassword,
          Message.toasterSuccess,
          {
            timeOut: Message.toasterTimeout,
          }
        );
        this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
      },error => {
        this.toaster.error(
          Message.toasterResetPassword,
          Message.toasterFailure,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      })
    }

}
