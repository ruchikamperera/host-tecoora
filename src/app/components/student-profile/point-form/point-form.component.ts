import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { FormType, VisaType } from 'src/app/enum/common';
import { Message } from 'src/app/shared/constants/enums/toaster';
import { QuestionService } from 'src/app/shared/services/question.service';
import { StudentPointFormService } from 'src/app/shared/services/student-point-form.service';

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.scss']
})
export class PointFormComponent implements OnInit {
  session: any;
  questions: any;
  pointForm: any[] = [];
  summary: string;
  total: number = 0;
  updatedAnswers: any = [];
  formType: string;
  visaType: VisaType;
  bsModalRef: BsModalRef;
  @ViewChild('modalContent', { static: false }) modalContent: TemplateRef<any>;
  questionList: any;
  instructions: any;

  constructor(private router: Router,
    private questionService: QuestionService,
    private studentPointFromService: StudentPointFormService,
    private toaster: ToastrService,
    public modalService: BsModalService) {
    if (this.router.getCurrentNavigation().extras.state == null) {
      this.router.navigate(['/student-profile']);
    } else {
      this.session = JSON.parse(this.router.getCurrentNavigation().extras.state?.session);
      this.summary = this.session.summaryPlan;
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < this.session.criterias.length; i++) {
      if (this.session.criterias[i].instructions.length > 1) {
        this.session.criterias[i].instructions = this.session.criterias[i].instructions.sort((b, a) => new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime());
      }
    }

    switch (this.session.formTypeId) {
      case 1: {
        this.formType = FormType.one;
        this.visaType = VisaType.australian;
        break;
      }
      case 2: {
        this.formType = FormType.two;
        this.visaType = VisaType.australian;
        break;
      }
      case 3: {
        this.formType = FormType.tree;
        this.visaType = VisaType.australian;
        break;
      }
      case 4: {
        this.formType = FormType.four;
        this.visaType = VisaType.australian;
        break;
      }
      case 5: {
        this.formType = "";
        this.visaType = VisaType.canberra;
        break;
      }
    }
    this.clickOneSession(this.session.formTypeId)
  }

  clickOneSession(selectedSessionId: any) {

    this.questionService.getPointForm(selectedSessionId).subscribe(res => {
      this.questions = res.data;
      this.questions.forEach(question => {

        this.questionList = this.session.criterias.filter(obj => obj.questionId === question.id);

        this.questionList[0]?.instructions.forEach(element => {
          const dateTimeString = element.addedDate;
          const dateTime = new Date(dateTimeString);
          element.date = dateTime.toDateString(); 
          element.time = dateTime.toLocaleTimeString(); 
        });

        let viewQuestion = {
          id: question.id,
          name: question.name,
          answers: question.answers,
          selected: this.questionList[0]?.answersId,
          alert: this.questionList[0]?.alert?.split('T')[0],
          comment: this.questionList[0]?.instructions[0]?.comment,
          point: question.answers[this.questionList[0]?.answersId]?.points,
          cId: this.questionList[0]?.id,
          instructions: this.questionList[0]?.instructions
        }

        this.pointForm.push(viewQuestion);
      });
      this.total = 0;
      this.pointForm.forEach(e => {
        this.total = this.total + e.point;
      })

    })

  }

  update() {
    this.updatedAnswers = [];

    this.pointForm.forEach(element => {

      this.session.criterias.forEach(beforeEdit => {

        if (beforeEdit.id == element.cId) {
          let instruction : any[] = [];

          let comment = beforeEdit.instructions[0]?.comment;

          if ((element.comment !== null && element.comment !== "") && comment !== element.comment) {
            
            instruction = [{
                studentId: this.session.studentUserId,
                studentPointFormId: this.session.formTypeId,
                lawyerId: this.session.createLawyerId,
                comment: element.comment,
                addedDate: new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
                attempt: this.session.attempt
            }]

            let criteria = {
              id: element.cId,
              questionId: element.id,
              answersId: element.selected,
              instructions: instruction,
              alert: new DatePipe('en-US').transform(element.alert, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')
            }

            let toBeUpdatedInstruction: any[] = [];
            if(criteria.instructions[0]){
              toBeUpdatedInstruction.push(criteria.instructions[0]);
            }
            criteria.instructions = toBeUpdatedInstruction;
            this.updatedAnswers.push(criteria);
          }
        }
      });

    })

    this.studentPointFromService.updateStudentForms(
      this.session.id,
      this.session.attempt,
      this.session.studentUserId,
      this.session.createLawyerId,
      this.session.formTypeId,
      this.summary,
      this.updatedAnswers
    ).subscribe(res => {
      this.toaster.success(
        Message.toasterPointFormUpdate,
        Message.toasterSuccess,
        {
          timeOut: Message.toasterTimeout,
        }
      );
     this.router.navigateByUrl('/student-profile/details', { state: { id: this.session.studentUserId } });

    })

  }

  requestDocuments(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
    });
  }

  viewEditedInstructions(content: TemplateRef<any>, instructions: any) {
    
    this.instructions = instructions.filter((instruction) => instruction.comment !== "" && instruction.comment !== null);
    this.bsModalRef = this.modalService.show(content, {
      class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
    });
  }

}
