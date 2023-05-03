import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FileType } from 'src/app/enum/common';
import { Message } from 'src/app/shared/constants/enums/toaster';
import { FileService } from './../../../shared/services/file.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
})
export class DocumentUploadComponent implements OnInit {
  documents: any = [];
  documentForm: FormGroup;
  model: NgbDateStruct;
  uploadedDocuments: any[];
  inputFile: File;
  dataAggiornamentoTemplate: string = '10/10/2018';
  isEmpty: boolean;
  submitObject: any =[];
  arrData: any =[];
  isUploaded: boolean = false;
  fileUrl: string;
  fileSavedId: any;
  userId: number;

  constructor(
    private documentBuilder: FormBuilder,
    private router: Router,
    private fileService: FileService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {

    this.userId = Number(localStorage.getItem("userId"));
    this.createForm();
    //TODO set real lawyer id that selected
    this.getUserUploadedFiles(1,this.userId).then(() => {
      this.getLawyerRequestedFile(1, this.userId);
    })
    
    
  }
  getLawyerRequestedFile(lawyerId: any, studentId: any) {
    let fileRequestDetail = {
      lawyerId: lawyerId,
      studentId: studentId,
    };
    this.fileService.getUserRequestedFiles(fileRequestDetail).subscribe(
      (res) => {
        this.documents = res.data;
        console.log(this.documents,"documents")
        if(this.documents.length == 0){
          this.isEmpty = true;
        }else {
          this.isEmpty = false;
        } 
        
        this.documents.forEach(element => {
          this.uploadedDocuments?.forEach(c => {
            this.fileUrl = null;
            this.fileSavedId = 0;
            if(c.fileType == element.fileType && c.fileUrl ){

              element.isUploaded = true;
              this.fileSavedId = c.id;
              element.fileUrl = c.fileUrl
            }
          })

          let fileTypeDes
          switch (element.fileType) {
            case 1: {
              fileTypeDes = FileType.case1;
              break;
            }
            case 2: {
              fileTypeDes = FileType.case2;
              break;
            }
            case 3: {
              fileTypeDes = FileType.case3;
              break;
            }
            case 4: {
              fileTypeDes = FileType.case4;
              break;
            }
          }
          let elementData ={
            dueDate: element.dueDate.split('T')[0],
            fileType: element.fileType,
            fileTypeDes : fileTypeDes,
            id: this.fileSavedId,
            isDeleted: element.isDeleted,
            lawyerId: element.lawyerId,
            studentId: element.studentId,
            isUploaded: element.isUploaded,
            fileUrl: element.fileUrl,
          }
          this.arrData.push(elementData);
        });
      },
      (error) => {
        console.log(error)
      }
    );
  }

  getUserUploadedFiles (lawyerId: any, studentId: any) {
    return new Promise<void>((resolve, reject) => {
      let fileUploadedDetail = {
        lawyerId: lawyerId,
        studentId: studentId,
      };
      this.fileService.getUserUploadedFiles(fileUploadedDetail).subscribe(res => {
        console.log(res);
        this.uploadedDocuments = res.data;
      },
      (error) => {
        console.log(error)
      }
      
      );
      resolve()
    });
  }

  createForm(): void {
    this.documentForm = this.documentBuilder.group({
      date: ['', Validators.required],
      select: ['', Validators.required],
    });
  }

  getFile(fileType){   
    if(fileType) { 
      const index: number = this.submitObject.findIndex(obj => obj.fileType === fileType);
      if (index !== -1) {
          this.submitObject.splice(index, 1);
      }  
      console.log(this.submitObject,'this.submitObject');
    }
  }

  onChange(file: any, fileType: any,fileTypeDes: any, studentId: number, lawyerId: number){
    if(file) { 
      let fileToUpload = <File>file[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      this.inputFile = file[0];
      let fileEnum
      switch (fileTypeDes) {
        case FileType.case1: {
          fileEnum = 1;
          break; 
        }
        case FileType.case2: {
          fileEnum = 2;
          break; 
        }
        case FileType.case3: {
          fileEnum = 3;
          break; 
        }
        case FileType.case4: {
          fileEnum = 4;
          break; 
        }
      }

    this.fileService.userFileUpload(formData).subscribe(
      res => {
        let oneObject = {
          studentId: studentId,
          lawyerId: lawyerId,
          fileType: fileEnum,
          fileUrl: res,
          isDeleted: false       
      };
      this.submitObject.push(oneObject);

    },
    (error) => {
      console.log(error, 'error')
    }
    );

  }
  }
  
  save(){
    this.fileService.userFileUploadSave(this.submitObject).subscribe(res => {
      if(res.success === true){
        this.getLawyerRequestedFile(1, 1);
        this.toaster.success(
          Message.fileSavedSuccess,
        );
        this.getUserUploadedFiles(1, 1);
      }else{
        this.toaster.error(
          Message.toasterFailure,
        );
      }      
    })

  }

  upload(files: File, fileType: any) {
    console.log(files[0], 'file');
    const formData: FormData = new FormData();
    let fileEnum;
    formData.append('fileKey', files[0], "123");

    switch (fileType) {
      case FileType.case1: {
        fileEnum = 1;
        break; 
      }
      case FileType.case2: {
        fileEnum = 2;
        break; 
      }
      case FileType.case3: {
        fileEnum = 3;
        break; 
      }
      case FileType.case4: {
        fileEnum = 4;
        break; 
      }
    }

    this.fileService.addUserFileDetail(formData).subscribe(
      (res) => {
        this.toaster.success(
          Message.toasterDocumentUpload,
          Message.toasterSuccess,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      },
      (error) => {
        this.toaster.error(
          Message.toasterDocumentUpload,
          Message.toasterFailure,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      }
    );
  }

  deleteFile(document ) {
    let userFileDetail = {
      studentId: document.studentId,
      lawyerId: document.lawyerId,
      fileType: document.fileType,
      fileUrl: document.fileUrl,
      isDeleted: false,
    };
    console.log(userFileDetail,'Delete',document.fileType)
    this.fileService.userFileDelete(userFileDetail).subscribe(
      (res) => {
        this.toaster.success(
          Message.toasterDocumentDelete,
          Message.toasterSuccess,
          {
            timeOut: Message.toasterTimeout,
          }
        );
        console.log(res)
      },
      (error) => {
        console.log(error,'error')
        this.toaster.error(
          Message.toasterDocumentDelete,
          Message.toasterFailure,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      }
    );
  }

  cancel() {
    this.router.navigate(['/student-dashboard']);
  }
}
