import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './pages/contentCreator/creator/creator.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = 
[
  {

    path:'customer',
    loadChildren: () => import('./pages/customer-support/customer-support.module').then(m => m.CustomerSupportModule)
  },
  {
    path:'stories',
    loadChildren: () => import('./pages/stories/stories.module').then(m => m.StoriesModule)
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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

