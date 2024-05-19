import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {
    path:'customer-support',
    loadChildren: () => import('./pages/customer-support/customer-support.module').then(m => m.CustomerSupportModule)
  },
  {
    path:'stories',
    loadChildren: () => import('./pages/stories/stories.module').then(m => m.StoriesModule)
  },
  {
    path:'',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

