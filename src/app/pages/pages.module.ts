import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { ContentsModule } from './contents/contents.module';
import { InspectorModule } from './inspector/inspector.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
   ContentsModule,
   InspectorModule,

  ]
})
export class PagesModule { }
