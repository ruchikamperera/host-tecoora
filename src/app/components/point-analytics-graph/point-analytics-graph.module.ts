import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointAnalyticsGraphRoutingModule } from './point-analytics-graph-routing.module';
import { AnalyticsGraphComponent } from './analytics-graph/analytics-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AnalyticsGraphComponent
  ],
  imports: [
    CommonModule,
    PointAnalyticsGraphRoutingModule,
    HighchartsChartModule,
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class PointAnalyticsGraphModule { }
