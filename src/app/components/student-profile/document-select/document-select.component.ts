import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../../shared/services/file.service';
import { Message } from 'src/app/shared/constants/enums/toaster';
import { FileType } from 'src/app/enum/common';
import { DocPreviewConfig } from 'img-pdf-viewer';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-document-select',
  templateUrl: './document-select.component.html',
  styleUrls: ['./document-select.component.scss'],
})
export class DocumentSelectComponent implements OnInit {
  documents: { id: number; type: string }[] = [];
  documentForm: FormGroup;
  model: NgbDateStruct;
  submitObject: any [] =[];
  isSelectDate: boolean = true;
  dueDate: any = "";
  uploadedFiles: any[] = [];
  isClickUploaded: any;
  requestedDocuments: any;
  fileUrl: any;
  encapsulation: ViewEncapsulation.None;
  url: string;
  docPreviewConfig: DocPreviewConfig = {
    zoomIn: true,
    zoomOut: true,
    rotate: true,
    download: true,
    openModal: true,
    close: false,
    docScreenWidth: '100%',
    modalSize: 'md',
    customStyle: '',
    zoomIndicator: true,
  };
  minDate: Date

  constructor(
    private documentBuilder: FormBuilder,
    private router: Router,
    private fileService: FileService,
    private toaster: ToastrService,
    private modalService: NgbModal,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const date = new Date();
    this.minDate = new Date(this.datePipe.transform(date,"yyyy-MM-dd"));
    this.documents = [
      {
        id: 1,
        type: 'PaySlips',
      },
      {
        id: 2,
        type: 'Bachelor certificate',
      },
      {
        id: 3,
        type: 'Passport',
      },
      {
        id: 4,
        type: 'Australian/Home country driving license',
      },
    ];

    this.createForm();
    this.getUploadedDocuments(1,1);
    this.getRequestedFiles(1,1);
  }

  //To identify already requested file types
  getRequestedFiles (lawyerId: any, studentId: any) {
    let requestBody = {
      lawyerId:lawyerId,
      studentId: studentId
    }
    this.fileService.getUserRequestedFiles(requestBody).subscribe(res => {
      console.log(res,'requested files');
      const seen = new Set();
      const arr = res.data;
      const filteredArr = arr.filter(el => {
        const duplicate = seen.has(el.fileType);
        seen.add(el.fileType);
        return !duplicate;
      });
      this.requestedDocuments = filteredArr;

      this.requestedDocuments.forEach(element => {

        this.uploadedFiles.forEach(value => {
          if(value.fileType == element.fileType && value.fileUrl !== ""){
            element.isSubmitted = true;
            element.fileUrl = value.fileUrl;
          }else {
            element.isSubmitted = false;
          }
        })
      })

      this.requestedDocuments.forEach(element => {

        switch (element.fileType) {
          case 1: {
            return element.fileType = FileType.case1;
          }
          case 2: {
            return element.fileType = FileType.case2;
          }
          case 3: {
            return element.fileType = FileType.case3;
          }
          case 4: {
            return element.fileType = FileType.case4;
          }
        }
       

      });

      console.log(this.requestedDocuments,'f list');
    },
    (error) => {
      console.log(error)
    }
    );
  }

  getUploadedDocuments (lawyerId: any, studentId: any) {
    let fileUploadedDetail = {
      lawyerId: lawyerId,
      studentId: studentId,
    };
    this.fileService.getUserUploadedFiles(fileUploadedDetail).subscribe(res => {
      this.uploadedFiles = res.data;
      console.log(res,'uploaded');
    },
    (error) => {
      console.log(error)
    }
    );

    this.uploadedFiles.forEach(element => {

      switch (element.fileType) {
        case 1: {
          return element.fileType = FileType.case1;
        }
        case 2: {
          return element.fileType = FileType.case2;
        }
        case 3: {
          return element.fileType = FileType.case3;
        }
        case 4: {
          return element.fileType = FileType.case4;
        }
      }
    });

    this.uploadedFiles = this.uploadedFiles.filter(obj => obj.fileUrl !== null);
  }

  changeDate(event: any) {
    this.dueDate = event;
    if(this.dueDate == ""){
      this.isSelectDate = false;
    }else {
      this.isSelectDate = true;
    }
  }

  createForm(): void {
    this.documentForm = this.documentBuilder.group({
      date: ['', Validators.required],
      select: ['', Validators.required],
    });
  }

  onChange(event, fileType){

    if(event.target.checked == true){
      let dueDate = this.dueDate;
      if(dueDate == ""){
        this.isSelectDate = false;
        event.target.checked =false;
      }else {
        this.isSelectDate = true;
        let oneObject = {
          // TODO studentId, lawyerId need to be real value with signin integration
          studentId: 1,
          lawyerId: 1,
          fileType: fileType,
          dueDate: new Date(dueDate),
          isDeleted: false,
        }
        this.submitObject.push(oneObject);
        dueDate = "";
        this.dueDate = "";
      }
    }else {
      this.submitObject = this.submitObject.filter(obj => obj.fileType !== fileType);
    }
  }

  request() {
    this.fileService
      .addLawyerRequestedFiles(this.submitObject)
      .subscribe(
        (res) => {
          this.toaster.success(
            Message.toasterDocumentRequest,
            Message.toasterSuccess,
            {
              timeOut: Message.toasterTimeout,
            }
          );
          this.documentForm.reset();
          this.dueDate = "";
          this.submitObject = [];
        },
        (error) => {
          this.toaster.error(
            Message.toasterDocumentRequest,
            Message.toasterFailure,
            {
              timeOut: Message.toasterTimeout,
            }
          );
          this.documentForm.reset();
          this.dueDate = "";
          this.submitObject = [];
        }
      );
  }

  uploadedDocuments(){
    this.isClickUploaded =! this.isClickUploaded;
  }

  viewDocument(url: string){
   this.router.navigate(['/document-view']);
  }

  // cancel() {
  //   this.router.navigate(['/lawyer-dashboard']);
  // }

  add(){

  }


	openFullscreen(content, url) {
    this.url = "https://tecoorastorage.blob.core.windows.net/tecoora-files/91e28f7c-ad22-4efd-b1da-0ce6d2158253.png";
		this.modalService.open(content);
	}

}
