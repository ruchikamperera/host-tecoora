import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiActionName } from '../constants/enums/action-names';
import { BaseService } from './01_base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class StudentPointFormService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

  getStudentForms(studentId: any): Observable<any> {

    return this.http.get<any[]>(this.getBaseUrl(ApiActionName.GetStudentFormsByStudentId), { 
      params: { 
        studentId: studentId
      }
    });
  }

  createStudentForm(studentForm: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.CreateStudentForm), studentForm);
  }

  updateStudentForms(id: number, attempt: number, studentId: number, lawyerId: number, formTypeId: number, summaryPlan: string, criteria: any): Observable<any> {
    let body = {
        id: id,
        attempt: attempt,
        studentUserId: studentId,
        createLawyerId: lawyerId,
        criterias:criteria,
        formTypeId: formTypeId, 
        summaryPlan: summaryPlan,
    }
    return this.http.put<any>(this.getBaseUrl(ApiActionName.UpdateStudentForms), body);
  }

  deleteStudentForm(studentFormId: any): Observable<any> {
    return this.http.delete<any>(this.getBaseUrl(ApiActionName.DeleteStudentFormById), studentFormId);
  }
}
