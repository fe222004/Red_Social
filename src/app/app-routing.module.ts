import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './pages/contentCreator/creator/creator.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StoriesComponent } from './pages/components/stories/stories.component';

const routes: Routes = 
[
  {
    path:'customer',
    loadChildren: () => import('./pages/customer-support/customer-support.module').then(m => m.CustomerSupportModule)
  },
  {
     path:'p',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'creator',
    component: CreatorComponent
  },
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'stories',
    component: StoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

