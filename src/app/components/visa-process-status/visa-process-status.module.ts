import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaProcessStatusRoutingModule } from './visa-process-status-routing.module';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    VisaProcessStatusRoutingModule
  ]
})
export class VisaProcessStatusModule { }
