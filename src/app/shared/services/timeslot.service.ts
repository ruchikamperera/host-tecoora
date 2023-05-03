import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiActionName } from '../constants/enums/action-names';
import { BaseService } from './01_base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   getTimeSlotsByLawyerId(lawyerId: any): Observable<any> {
    let params: any = new HttpParams();

    // Begin assigning parameters
    params = params.append('lawyerId', lawyerId);
    return this.http.get<any[]>(this.getBaseUrl(ApiActionName.GetTimeSlotsByLawyerId), { params: params });
  }

  createTimeSlot(timeSlotDto: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.CreateTimeSlot), timeSlotDto);
  }

}
