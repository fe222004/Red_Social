import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { StoriesComponent } from './components/stories/stories.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { CustomerCreateComponent } from './customer-support/customer-create/customer-create.component';
import { CustomerListComponent } from './customer-support/customer-list/customer-list.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contenent',
    loadChildren: () => import('./contents/contents.module').then(m => m.ContentsModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./contentCreator/page-creator.module').then(m => m.PageCreatorModule)
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
  {
    path:'user',
    loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
