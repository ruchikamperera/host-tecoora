import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';
import { FileService } from 'src/app/shared/services/file.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  name: string;
  state: string;
  companyName: string;
  oneHourFee: number;
  halfHourFee: number;
  user: User;
  editForm: FormGroup;
  isCharging: boolean;
  isEdit: boolean = true;
  isStaff: boolean;

  
  @ViewChild('avatarImg', { static: true }) avatarImgElement: ElementRef;

  photo: string;
  @Output() photoUpdated = new EventEmitter<string>();

  showAddPhotoOverlay = false;
  userId: number;

  constructor(private userService: UserService, 
    private editBuilder: FormBuilder, 
    public toaster : ToastrService,
    private fileService: FileService) { }

  ngOnInit(): void {
    //need to pass actual logged in user id 
    this.userId = Number(localStorage.getItem("userId"))
    this.getProfileByLoggedInUserId(this.userId);
  }

  getProfileByLoggedInUserId(id: number) {
    //get userById endpoint
    this.userService.getUserById(id).subscribe((response) => {
      console.log(response,"user")
      this.user = response.data;
      this.name= this.user.firstName;
      this.state = this.user.state;
      this.companyName = this.user.companyName;
      this.oneHourFee = this.user.consultationFeeForOneHour;
      this.halfHourFee = this.user.consultationFeeForHalfAndHour;
      this.isCharging = this.user.chargingForExtraMin;
      this.photo = this.user.profileImageUrl;
      localStorage.setItem("profileImage", this.photo);

      if(this.user.userType=='staff'){
        this.isStaff=true;
      }

      //fetch user fields to edit form
      this.createForm();

    });
  }

  createForm(){ 
    this.editForm = this.editBuilder.group({
      fName: [this.name, Validators.required],
      fState: [this.state, Validators.required],
      fCompanyName: [this.companyName, Validators.required],
      fHourCharge: [this.oneHourFee],
      fHalfHourCharge: [this.halfHourFee],
      fIsCharging: [this.isCharging]
    });
  }

  //set extra minute charging true or false
  chargingChange(evt: any): void {
    this.isCharging = evt.target.checked;
  }

  //edit user profile
  saveEditedDetails(){
    let editedName = this.editForm.controls['fName'].value;
    let editedState = this.editForm.controls['fState'].value;
    let editedCompanyName = this.editForm.controls['fCompanyName'].value;
    let editedHourFee = this.editForm.controls['fHourCharge'].value;
    let editedHalfHourFee = this.editForm.controls['fHalfHourCharge'].value;
    let editedIsCharging = this.editForm.controls['fIsCharging'].value;

    if(
      this.editForm.controls['fName'].value!=this.name
      ||this.editForm.controls['fState'].value!=this.state
      ||this.editForm.controls['fCompanyName'].value!=this.companyName
      ||this.editForm.controls['fHourCharge'].value!=this.oneHourFee
      ||this.editForm.controls['fHalfHourCharge'].value!=this.halfHourFee
      ||this.editForm.controls['fIsCharging'].value!=this.isCharging
    ){
      this.isEdit = true;
      let body: User = {
        id: this.user.id,
        firstName: editedName,
        lastName: this.user.lastName,
        userType: this.user.userType,
        email: this.user.email,
        companyName: editedCompanyName,
        dob: this.user.dob,
        studentType: this.user.studentType,
        state: editedState,
        noOfReviews: this.user.noOfReviews,
        yearsOfExperience: this.user.yearsOfExperience,
        consultationFeeForOneHour: editedHourFee,
        consultationFeeForHalfAndHour: editedHalfHourFee,
        chargingForExtraMin: editedIsCharging,
        profileImageUrl: this.photo
      }
  
      this.userService.updateUser(body).subscribe(res => {
        console.log(res,"update")
        this.getProfileByLoggedInUserId(this.user.id);
        this.toaster.success(
          Message.toasterUpdateUser,
          Message.toasterSuccess,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      },error =>{
        this.toaster.error(
          Message.toasterUpdateUserError,
          Message.toasterFailure,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      })
    }else{
      this.isEdit = false;
      this.toaster.success(
        Message.toasterUpdateAsSame,
        Message.toasterSuccess,
        {
          timeOut: Message.toasterTimeout,
        }
      );
    }
  }

    addPhoto(event) {

      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.avatarImgElement.nativeElement.src = fileReader.result;
      };
      fileReader.readAsDataURL(event.target.files[0]);
      let image = event.target.files[0];
      let fileToUpload = event.target.files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      console.log(image )
  
      // save the image in the back end database
      this.fileService.userFileUpload(formData).subscribe(
        res => {
          console.log(res,"image url");
          let url = res;
          this.photo = url;
          this.user.profileImageUrl = url;

          this.userService.updateUser(this.user).subscribe(res => {
            console.log(res,"updated user");
            localStorage.setItem("profileImage", this.photo);
            this.toaster.success(
              Message.toasterUpdateUser,
              Message.toasterSuccess,
              {
                timeOut: Message.toasterTimeout,
              }
            );
            location.reload();
          })
  
      },
      (error) => {
        console.log(error, 'error')
      }
      );
    }
  
    openFileInput(fileInput){
      fileInput.click()
      this.showAddPhotoOverlay=false
    }
  
    removePhoto() {
      this.avatarImgElement.nativeElement.src = '';
      this.photo = null;
      this.user.profileImageUrl = this.photo;
      this.userService.updateUser(this.user).subscribe(res => {
        console.log(res,"updated user photo");
        localStorage.setItem("profileImage", this.photo);
        this.toaster.success(
          Message.toasterUpdateUser,
          Message.toasterSuccess,
          {
            timeOut: Message.toasterTimeout,
          }
        );
        location.reload();
      })
    }
}
