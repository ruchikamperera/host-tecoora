import { AnalyticsGraphComponent } from './analytics-graph/analytics-graph.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: AnalyticsGraphComponent, data: {title: 'analytics-graph'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointAnalyticsGraphRoutingModule { }
