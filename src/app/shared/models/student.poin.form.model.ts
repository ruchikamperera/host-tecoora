import { Criteria } from './Criteria.model';

export class StudentPointForm {
  id: number;
  attempt: number;
  studentUserId: number;
  createLawyerId: number;
  criterias: Criteria[];
  formTypeId: number;
  summaryPlan?;
  string;
}
