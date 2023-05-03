import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PointFormComponent } from './point-form/point-form.component';

const routes: Routes = [
  { path: '' , component: ProfileComponent, data: {title: 'Profile'}} ,
  {path: 'details' , component: DetailsComponent, data: {title: 'Profile'}},
  {path: 'point-form' , component: PointFormComponent, data: {title: 'Profile'} ,
  // children: [
  //   {
  //     path: 'details',
  //     component: DetailsComponent,
  //     data: {
  //       title: 'Details'
  //     }
  //   },
  // ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentProfileRoutingModule { }
