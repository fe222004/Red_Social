import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InspectorRoutingModule } from './inspector-routing.module';
import { ComplaintComponent } from './complaint/complaint.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ComplaintComponent,
   
  ],
  imports: [
    CommonModule,
    InspectorRoutingModule,
    DialogModule,
    ButtonModule
  ],

})
export class InspectorModule { }
