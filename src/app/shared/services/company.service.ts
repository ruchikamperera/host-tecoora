import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiActionName } from '../constants/enums/action-names';
import { BaseService } from './01_base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   getCompanies(): Observable<any> {
    return this.http.get<any[]>(this.getBaseUrl(ApiActionName.GetCompanies));
  }

  createCompany(company: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.CreateCompany), company);
  }

  updateCompany(company: any): Observable<any> {
    return this.http.put(this.getBaseUrl(ApiActionName.UpdateCompany), company);
  }

  deleteCompany(companyId: any): Observable<any> {
    return this.http.delete<any>(this.getBaseUrl(ApiActionName.DeleteCompany), companyId);
  }
}
