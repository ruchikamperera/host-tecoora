import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffProfileRoutingModule } from './staff-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    StaffProfileRoutingModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class StaffProfileModule { }
