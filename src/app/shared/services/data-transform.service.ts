import { DatePipe } from "@angular/common";
import { DateTransform } from "../constants/enums/common";

export class DateTransformService {
         constructor(public datePipe: DatePipe) {}

         dateTransformFullYear(date: any): string {
           return this.datePipe.transform(
             date,
             DateTransform.dateTransformFullYear
           );
         }

         dateTransformTime(date: any): string {
           return this.datePipe.transform(
             date,
             DateTransform.dateTransformTime
           );
         }

         dateFromString(dateString: string): Date {
           return new Date(Date.parse(dateString.replace(/-/g, '/')));   //       / /g, 'T'
         }
       }