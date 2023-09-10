import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoWeServeComponent } from './who-we-serve.component';
import { WhoWeServeRoutingModule } from './who-we-serve-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ManufactoringComponent } from './manufactoring/manufactoring.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';



@NgModule({
  declarations: [
    WhoWeServeComponent,
    OilGasComponent,
    UtilitiesComponent,
    ManufactoringComponent,
    ItConsultingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WhoWeServeRoutingModule
  ]
})
export class WhoWeServeModule { }
