import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './01_base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }
}
