import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiActionName } from '../constants/enums/action-names';
import { BaseService } from './01_base-service/base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<any> {
    return this.http.get<any[]>(this.getBaseUrl(ApiActionName.GetUserById));
  }

  getUsersByType(user: any): Observable<any> {
    return this.http.post<any[]>(
      this.getBaseUrl(ApiActionName.GetUserByUserTypeOrSortByOrSerchByString),
      user
    );
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.SignUp), user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(this.getBaseUrl(ApiActionName.CreateUser), user);
  }

  signUpUser(user: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.SignUp), user);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(
      this.getBaseUrl(`${ApiActionName.GetUserById}/${userId}`
      )
    );
  }

  emailSendOtp(email: string): Observable<any> {
    return this.http.get<any>(
      this.getBaseUrl(`${email}/${ApiActionName.SendOTP}`
      )
    );
  }


}
