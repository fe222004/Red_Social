import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './explorer/explorer.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes =[
  {path:'explorer', component:ExplorerComponent}
]

@NgModule({
  declarations: [
    ExplorerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContentModule { }
