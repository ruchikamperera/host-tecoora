import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionalMapRoutingModule } from './regional-map-routing.module';
import { MapComponent } from './map/map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RegionalMapRoutingModule,
    NgbModule,
    AgmCoreModule
  ]
})
export class RegionalMapModule { }
