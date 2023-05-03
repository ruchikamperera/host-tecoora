import { StudentPointForm } from './student.poin.form.model';

export class Criteria {
  id: number;
  questionId: number;
  answersId: number;
  comment?: string;
  alert?: Date;
  studentForm: StudentPointForm;
  studentFormId: number;
}
