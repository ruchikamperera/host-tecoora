import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentProfileRoutingModule } from './student-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { PointFormComponent } from './point-form/point-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportModule } from '../home/import.module';
import { SelectedDocumentsComponent } from './selected-documents/selected-documents.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ImgPdfViewerModule } from 'img-pdf-viewer';
import { ToastrModule } from 'ngx-toastr';
import { DocumentSelectComponent } from './document-select/document-select.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    PointFormComponent,
    SelectedDocumentsComponent,
    DocumentSelectComponent
    
    

  ],
  imports: [
    CommonModule,
    StudentProfileRoutingModule,
    HttpClientModule,
    NgbModalModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDocViewerModule,
    ImgPdfViewerModule,
    NgbModule,
    SharedModule,
    ImportModule,
    NgxPaginationModule,
    ToastrModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class StudentProfileModule { }
