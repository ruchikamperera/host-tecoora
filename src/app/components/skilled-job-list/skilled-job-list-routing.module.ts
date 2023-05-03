
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';

const routes: Routes = [
  { path: '' , component: JobListComponent, data: {title: 'job-list'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkilledJobListRoutingModule { }
