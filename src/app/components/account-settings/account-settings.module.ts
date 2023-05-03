import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule,
    NgbModalModule,
    SharedModule,
    MatIconModule, 
    MatButtonModule,
    NgbModule
  ]
})
export class AccountSettingsModule { }
