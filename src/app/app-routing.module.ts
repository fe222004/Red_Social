import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportService } from './services/customer-support.service';


const routes: Routes = 
[
  {
    path:'',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CustomerSupportService]
})
export class AppRoutingModule { }

