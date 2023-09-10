import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoWeServeComponent } from './who-we-serve.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ManufactoringComponent } from './manufactoring/manufactoring.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';

const routes: Routes = [
  {
    path: '',
    component: WhoWeServeComponent,
  },
  {
    path: 'oil-and-gas',
    component: OilGasComponent,
  },
  {
    path: 'utilities',
    component: UtilitiesComponent,
  },
  {
    path: 'manufactoring',
    component: ManufactoringComponent,
  },
  {
    path: 'it-consulting',
    component: ItConsultingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoWeServeRoutingModule {}
