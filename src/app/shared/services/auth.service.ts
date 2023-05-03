import { BaseService } from './01_base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiActionName } from '../constants/enums/action-names';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  login(userDetails: any): Observable<any> {
    let data = {
      email: userDetails.email,
      password: userDetails.password
  }
    return this.http.post<any>(this.getBaseUrl(ApiActionName.Login), data);
  }

  loginWithGoogle(){

    // return this.http.post(loginUrl,data)
  }
}