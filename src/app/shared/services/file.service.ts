import { Injectable } from '@angular/core';
import { BaseService } from './01_base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiActionName } from '../constants/enums/action-names';

@Injectable({
  providedIn: 'root',
})
export class FileService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  addLawyerRequestedFiles(lawyerRequestedFiles: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.AddLawyerRequestedFile), lawyerRequestedFiles);
  }

  getUserRequestedFiles(lawyerRequestedFile: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.GetLawyerRequestedFile), lawyerRequestedFile);
  }

  addUserFileDetail(userFile: any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.UserFileDetails), userFile);
  }

  userFileUpload(files:FormData): Observable<any> {
    const requestOptions = Object.assign(
      { responseType: 'text' }
    );
    return this.http.post<any>(this.getBaseUrl(ApiActionName.UserFileUpload), files, requestOptions);
  }

  getUserUploadedFiles(studentUploadedFile:any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.GetStudentUploadedFile), studentUploadedFile);
  }

  userFileDelete(files:any){
    return this.http.delete<any>(this.getBaseUrl(ApiActionName.deleteUploadedFile), files);
  }
  userFileUploadSave(saveUploadData:any): Observable<any> {
    return this.http.post<any>(this.getBaseUrl(ApiActionName.studentFileUpload), saveUploadData);
  }
}
