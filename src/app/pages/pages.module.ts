import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { InspectorModule } from './inspector/inspector.module';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
   InspectorModule,

  ]
})
export class PagesModule { }
