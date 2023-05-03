import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor() { }

  public getBaseUrl = (route: string) => {
    return `${this.baseApiUrl}/${route}`;
  }
}
