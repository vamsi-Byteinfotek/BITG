import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurExpertiseComponent } from './our-expertise.component';
import { OurExpertiseRoutingModule } from './our-expertise-routing.module';
import { SapSolutionsComponent } from './sap-solutions/sap-solutions.component';
import { InforSolutionsComponent } from './infor-solutions/infor-solutions.component';
import { SoftwareDevelopmentSolutionsComponent } from './software-development-solutions/software-development-solutions.component';
import { ProjectManagementSolutionsComponent } from './project-management-solutions/project-management-solutions.component';
import { CloudSolutionsComponent } from './cloud-solutions/cloud-solutions.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OurExpertiseComponent,
    SapSolutionsComponent,
    InforSolutionsComponent,
    SoftwareDevelopmentSolutionsComponent,
    ProjectManagementSolutionsComponent,
    CloudSolutionsComponent,
    ManagedServicesComponent
  ],
  imports: [
    CommonModule,
    OurExpertiseRoutingModule,
    SharedModule
  ]
})
export class OurExpertiseModule { }
