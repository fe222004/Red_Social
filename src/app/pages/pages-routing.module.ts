import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComplaintComponent } from './inspector/complaint/complaint.component';
import { ExplorersComponent } from './contents/explorers/explorers.component';

const routes: Routes = [

  {
    path: 'c',
    loadChildren: () => import('./contentCreator/page-creator.module').then(m => m.PageCreatorModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'complaint',
   component: ComplaintComponent,
   },
{
 path:'explorer',
   component: ExplorersComponent
},
  
  {
    path: 'content',
    loadChildren:() => import('./contents/contents.module').then(m => m.ContentsModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
