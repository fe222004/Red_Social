import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './pages/contentCreator/creator/creator.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = 
[
  
  {
    path:'p',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'creator',
    component: CreatorComponent
  },
  {
    path:'d',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

