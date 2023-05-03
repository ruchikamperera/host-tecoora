import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';



@NgModule({
  declarations: [
    SignInComponent, 
    SignUpComponent,
    ForgotPasswordComponent, 
    ResetPasswordComponent, 
    LockScreenComponent, 
    SigninWithHeaderFooterComponent,
    SignupWithHeaderFooterComponent,
    ConfirmPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [
    SocialAuthService 
  ]
})
export class AuthModule { }
