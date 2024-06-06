import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { InspectorModule } from './inspector/inspector.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
   InspectorModule,
   RouterModule

  ]
})
export class PagesModule { }
