import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkilledJobListRoutingModule } from './skilled-job-list-routing.module';
import { JobListComponent } from './job-list/job-list.component';


@NgModule({
  declarations: [
    JobListComponent
  ],
  imports: [
    CommonModule,
    SkilledJobListRoutingModule
  ]
})
export class SkilledJobListModule { }
