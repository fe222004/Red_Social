import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoriesComponent } from './components/stories/stories.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
