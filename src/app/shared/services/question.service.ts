import { Injectable } from '@angular/core';
import { BaseService } from './01_base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiActionName } from '../constants/enums/action-names';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  getPointForm(subClassId: any): Observable<any> {

    return this.http.get<any>(this.getBaseUrl(`${ApiActionName.getPointForm}/${subClassId}`));
  }

  getQuestion(id: any): Observable<any> {

    return this.http.get<any>(this.getBaseUrl(`${ApiActionName.getQuestion}/${id}`));
  }
}
