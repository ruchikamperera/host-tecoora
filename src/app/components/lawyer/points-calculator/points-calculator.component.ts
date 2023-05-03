import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';
import { StudentPointFormService } from 'src/app/shared/services/student-point-form.service';
import { DatePipe } from '@angular/common';
import { QuestionService } from 'src/app/shared/services/question.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-points-calculator',
  templateUrl: './points-calculator.component.html',
  styleUrls: ['./points-calculator.component.scss']
})
export class PointsCalculatorComponent implements OnInit {
  selected = "australian";
  isAus: boolean;
  isCan: boolean;
  questions: any[] = [];
  isAnswer = new FormControl();
  questionsPoint: any[];
  type: number;
  totalPoint: number = 0;
  summary: string;
  showSummary: boolean;
  total: number;
  maxDate: string;
  submitValue: { id: number; name: string; answers: { label: string; score: number; }[]; show: boolean; point: number; comment: string; alert: Date; selected: number }[];
  attempt: any;
  criterias: any =[];
  subClassOneForm:any[] = [];
  pointFormOne: any[] = [];
  pointTypes: void;
  pointTypes1: any;

  //modal
  @ViewChild('modalContent', { static: false }) modalContent: TemplateRef<any>;

  title = 'Modal Title';
  bsModalRef: BsModalRef;
  userId: number;
  
  constructor(private toaster: ToastrService, 
    private studentPointFormService: StudentPointFormService,
    private questionService: QuestionService,
    public modalService: BsModalService) {
    this.isAus = true;
    this.maxDate = new Date().toISOString().slice(0, -14);
   }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem("userId"));
    //pass student id from meeting
    this.getAttempt(1);
    //TODO set id correctly
    this.getVisaTypes(1); 
  }

getVisaTypes(id: number){
  this.questionService.getQuestion(id).subscribe(res => {
    this.pointTypes = res.data;
    console.log(this.pointTypes,'types')
  })
}

  onChangeType(subClassId: number){
    console.log(subClassId,'type');
    this.showSummary = false;
    this.type = subClassId;
    this.getPointForm(this.type);
  }

  
  getPointForm(subClassId: number) {
    this.questionService.getPointForm(subClassId).subscribe(res=>{
      console.log(res,"result")
      
         this.subClassOneForm =res.data;   
         console.log(this.subClassOneForm,"sub ")
         this.pointFormOne = [];
         this.subClassOneForm.forEach(question => {
                
         let criteria ={
           id: question.id,
           name: question.name,
           answers: question.answers,
           selected: null,
           alert:null,
           comment: null,
           show: false
         }  
   
         this.pointFormOne.push(criteria);
         });
         console.log(this.pointFormOne,"point form")
         this.pointFormOne[0].show = true; 
       })
  }

  getAttempt(studentId: number){
    this.studentPointFormService.getStudentForms(studentId).subscribe(res => {
      let attemptArray = [];
      attemptArray.push(res.data);
      this.attempt = res.data[attemptArray[0].length-1]?.attempt;
      console.log(this.attempt,"attempt")
    })
  }

  onChangeTypeTwo(index:number, x: number)
  {
      this.pointFormOne[index].point  = this.pointFormOne[index].answers[x].points;

      //get total of point calculator
      let sum = 0;
      this.pointFormOne.forEach(f => {
        if(f.point != null){
          sum += f.point;
        }
      })
      this.total = sum;
      if(index < this.pointFormOne.length-1){
        this.pointFormOne[index+1].show = true;
      }
      if(index == this.pointFormOne.length-1){
        this.showSummary = true;
        this.submitValue = this.pointFormOne;      }
  }
  
  onClick(option: string) {
    this.showSummary = false;
    // this.pointFormOne[0].show = false;
    this.selected = option;
    if (option == 'australian') {
      location.reload();
      this.isAus = true;
    } else {
      this.isAus = false;
    }
    if (option == 'canberra') {
      this.getPointForm(5);
      this.type =5;
      this.isCan = true;
    } else {
      this.isCan = false;
    }
  }

  selectDocuments(template: TemplateRef<any>)  { 
      this.bsModalRef = this.modalService.show(template, {
        class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
      });
  }

  toasterMessage(){
    this.toaster.success(
      Message.toasterPointFormSubmit,
      Message.toasterSuccess,
      {
        timeOut: Message.toasterTimeout,
      }
    );
  }

  submit(){
    if(this.attempt<3){
      console.log(this.submitValue,"submit object")
      this.submitValue.forEach(question => {
        let criteria = {
          questionId: question.id,
          answersId: question.selected,
          //TODO correctly add student id with meeting
          
          instructions: [
            {
              studentId: 1,
              studentPointFormId: this.type,
              lawyerId: this.userId,
              comment: question.comment,
              addedDate: new Date().toISOString(),
              attempt: this.attempt+1
            }
          ],
          alert: new DatePipe('en-US').transform(question.alert, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')
  
        }
        this.criterias.push(criteria);
      })
      console.log(this.criterias,"criterias")
      //TODO set student Id correctly
      const pointFormSubmit = {
        attempt: this.attempt+1,
        studentUserId: 1,
        createLawyerId: this.userId,
        criterias: this.criterias,
        formTypeId: this.type,
        summaryPlan: this.summary
      }
      this.studentPointFormService.createStudentForm(pointFormSubmit).subscribe(res => {
        console.log(res,"result");
        if(res){
          this.toaster.success(
            Message.toasterPointFormSubmit,
            Message.toasterSuccess,
          );
        }
        this.getAttempt(1);
        
      })
    }else {
      console.log("attempt exceed")
      this.toaster.error(
        Message.toasterAttemptLimitExceed,
        Message.toasterFailure,
        {
          timeOut: Message.toasterTimeout,
        }
      );
    }
  }
}

export class Question {
  id: number;
  name: string;
  answers: any[];
  show: boolean;
  selected: boolean
}


