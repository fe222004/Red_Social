import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerCreateComponent } from './customer-support/customer-create/customer-create.component';
import { CustomerListComponent } from './customer-support/customer-list/customer-list.component';

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
    path: 'content',
    loadChildren: () => import('./contents/contents.module').then(m => m.ContentsModule)
  },
  {
    path: 'inspector',
    loadChildren: () => import('./inspector/inspector.module').then(m => m.InspectorModule)
  },
  {
    path:'customer',
    loadChildren: () => import('./customer-support/customer-support.module').then(m => m.CustomerSupportModule)
  },
  //Navegación componente create y list
  {
    path: 'customer-create',
    component: CustomerCreateComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
