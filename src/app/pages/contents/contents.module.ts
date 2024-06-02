import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentsRoutingModule } from './contents-routing.module';
import { ExplorersComponent } from './explorers/explorers.component';


@NgModule({
  declarations: [
    ExplorersComponent,
   
  ],
  imports: [
    CommonModule,
    ContentsRoutingModule
  ]
})
export class ContentsModule { }
