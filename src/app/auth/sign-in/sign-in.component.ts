import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginData } from 'src/app/entity/user';
import { Regex, UserRole } from 'src/app/enum/common';
import { SocialUser } from "angularx-social-login";
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from './../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from "angularx-social-login";
import { Message } from 'src/app/shared/constants/enums/toaster';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  username: any;
  password: any;
  isSubmit: boolean;
  errorMessage: boolean;
  show = false;
  isLoading = false;
  isError = false;
  showPassword = false;
  loginData : LoginData;
  decoded: any;
  loggedIn: boolean;
  user: SocialUser;
  invalidMessage: string;
  userType: any;

    constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private loginBuilder: FormBuilder, private socialAuthService: SocialAuthService, public userService: UserService, public toaster : ToastrService,) { }

    onShow(){
      if (this.password === 'password') {
        this.password = 'text';
        this.show = true;
      } else {
        this.password = 'password';
        this.show = false;
      }
    }

    createForm(): void {
      this.loginForm = this.loginBuilder.group({
        email: ['', [Validators.required, Validators.pattern(Regex.emailValidation)]],
        password: ['', Validators.required],
      });
      this.socialAuthService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(this.user,"user");
        this.checkUserExist();
      });
    }

    checkUserExist(){
      let email = {
        email: this.user.email
      }
      this.userService.getUsersByType(email).subscribe(res => {
        console.log(res,"existing user");
        if(res.data.length){
          if(res.data[0].userType == 1){
            if(res.data[0].authType=="tecoora"){
              this.toaster.error(
                Message.toasterUserNormalSignIn,
              );
            }else {
              let socialUser = {
                email: this.user.email,
                password: this.user.id
              }
              this.socialSignIn(socialUser);
            }
          }else {
            this.toaster.error(
              Message.toasterNotStudent,
            );
          }
          
          
        }else {
          this.socialSignUp(this.user);
        }
      })
    }

    resetLoginForm(showError: boolean = false) {
      this.isSubmit = false;
      this.errorMessage = showError;
      this.loginForm.reset();
    }

    signIn() {
      this.isLoading = true;
      this.isError = false;
  
      this.loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      let email = {
        email: this.loginForm.value.email
      }
      this.userService.getUsersByType(email).subscribe(res => {
        console.log(res,"existing user");
        if(res.data.length){
          if(res.data[0].userType == 1){
            if(res.data[0].authType=="tecoora"){
              this.signInAuth(this.loginData);
            }else if(res.data[0].authType=="google"){
              this.toaster.error(
                Message.toasterSignInWithGoogle,
              );
            }else if(res.data[0].authType=="facebook"){
              this.toaster.error(
                Message.toasterSignInWithFacebook,
              );
            }
          }else {
            if(res.data[0].authType=="tecoora"){
              this.signInAuth(this.loginData);
            }
          }  
        }
      })
    }

    signInAuth(loginData){
      this.authService.login(loginData).subscribe(
        res => {
          if(res['success']){
  
            localStorage.setItem('token',res['data'].token);
            localStorage.setItem('email',res['data'].email);
            localStorage.setItem('firstName',res['data'].firstName);
            localStorage.setItem('lastName',res['data'].lastName);
            localStorage.setItem('profileImage',res['data'].profileImageUrl);
            localStorage.setItem('userId',res['data'].id);
            console.log(res['data']); 
            this.userType = Number(res['data'].userType);
            console.log(this.userType,"type");
            
          }else{
            this.isError = true;
            this.invalidMessage = 'Invalid Credentials';
            this.isLoading = false;
            this.toaster.error(
              this.invalidMessage,
            );
          }
        },
        error =>{
          this.isError = true;
          this.errorMessage = error;
          this.isLoading = false;
          this.toaster.error(
            Message.toasterFailure,
          );
          this.router.navigate(['auth/sign-in']);
          console.log(error, 'error');
        },
        () =>{
          if(localStorage.getItem('token')){

            localStorage.setItem('role',this.userType);
            this.loginForm.reset();
            this.toaster.success(
              Message.toasterLoginSuccess,
              Message.toasterSuccess,
              {
                timeOut: Message.toasterTimeout,
              }
            );
    
            if (this.userType == UserRole.Student){
              this.router.navigate(['/student-dashboard']);
              this.isLoading = false;
    
            }else if (this.userType == UserRole.Staff){
              this.router.navigate(['/staff-dashboard']);
              this.isLoading = false;
    
            }else if (this.userType === UserRole.Lawyer) {
              this.router.navigate(['/lawyer-dashboard']);
              this.isLoading = false;
    
            }else if (this.userType === UserRole.Manager) {
              this.router.navigate(['/lawyer-dashboard']);
              this.isLoading = false;
    
            }else {          
              this.isError = true;
              this.invalidMessage = 'Invalid Credentials';
              this.isLoading = false;
            }
          }
        }
        )
    }
    
  loginWithGoogle() {
    let x = this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, true);
  }

  loginWithFacebook(){
    let x = this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID, true);
  }

    // On Forgotpassword link click
    onForgotPassword() {
      this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
    }
  
    // On Signup link click
    onSignup() {
      this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
    }
  

  ngOnInit(): void {
    this.password = 'password';
    this.createForm();
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

  socialSignUp(SocialUser) {
    console.log(SocialUser, 'SocialUser');

    let body  = {
      firstName: SocialUser.firstName,
      lastName: SocialUser.lastName,
      email: SocialUser.email,
      password: SocialUser.id,
      userType: "1",
      confirmPassword: SocialUser.id,
      authType: SocialUser.provider.toLowerCase(),
      profileImageUrl:SocialUser.photoUrl,
    }
    console.log(body);
    this.userService.signUpUser(body).subscribe(res => {
      if(res.success === true){
        // this.toaster.success(
        //   Message.toasterSignUpSuccess,
        // );
        this.socialSignIn(SocialUser);
      }else{
        this.toaster.error(
          Message.toasterFailure,
        );
      }      
      this.router.navigate(['auth/sign-in']);
    })
  }

  socialSignIn(SocialUser){
    this.isLoading = true;
    this.isError = false;

    this.loginData = {
      email: SocialUser.email,
      password: SocialUser.id
    };
    console.log(SocialUser, 'socialSignIn')
    this.signInAuth(this.loginData);


  }
}
