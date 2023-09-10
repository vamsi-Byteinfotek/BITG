import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurExpertiseComponent } from './our-expertise.component';
import { SapSolutionsComponent } from './sap-solutions/sap-solutions.component';
import { InforSolutionsComponent } from './infor-solutions/infor-solutions.component';
import { CloudSolutionsComponent } from './cloud-solutions/cloud-solutions.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';
import { ProjectManagementSolutionsComponent } from './project-management-solutions/project-management-solutions.component';
import { SoftwareDevelopmentSolutionsComponent } from './software-development-solutions/software-development-solutions.component';

const routes: Routes = [
  {
    path: '',
    component: OurExpertiseComponent,
  },
  {
    path: 'sap',
    component: SapSolutionsComponent,
  },
  {
    path: 'infor',
    component: InforSolutionsComponent,
  },
  {
    path: 'cloud',
    component: CloudSolutionsComponent,
  },
  {
    path: 'managed-services',
    component: ManagedServicesComponent,
  },
  {
    path: 'project-management',
    component: ProjectManagementSolutionsComponent,
  },
  {
    path: 'software-development',
    component: SoftwareDevelopmentSolutionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurExpertiseRoutingModule {}
