import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiActionName } from '../constants/enums/action-names';
import { BaseService } from './01_base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   getAppointments(): Observable<any> {
    return this.http.get<any[]>(this.getBaseUrl(ApiActionName.GetAppointments));
  }

  createAppointments(appointment: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.CreateAppointments), appointment);
  }

  updateAppointments(appointment: any): Observable<any> {
    return this.http.put(this.getBaseUrl(ApiActionName.UpdateAppointments), appointment);
  }

  getAppointmentsByStatusOrLawyerId(appointmentRequestData: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.GetAppointmentsByStatusOrLawyerId), appointmentRequestData);
  }

}
