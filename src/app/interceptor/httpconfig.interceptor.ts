import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpInterceptor, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements  HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token : string = localStorage.getItem('token');

    if (token){
        req = req.clone({headers: req.headers.set('Authorization',token)});
    }
    return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
            if(event instanceof HttpResponse){

            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            let data ={}
            data = {
                reason: error.error.reason,
                status: error.status
            };
            this.router.navigateByUrl('/auth/sign-in');
            return throwError(error);
        })
    );
      
  }

}