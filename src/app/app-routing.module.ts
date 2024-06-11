import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { ErrorComponent } from './components/auth/error/error.component';
import { AccessComponent } from './components/auth/access/access.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ComplaintComponent } from './pages/inspector/complaint/complaint.component';
import { ExplorersComponent } from './pages/contents/explorers/explorers.component';
import { FormSuscriptorComponent } from './pages/components/form-suscriptor/form-suscriptor.component';
import { CreatorComponent } from './pages/contentCreator/creator/creator.component';
import { CustomerSupportService } from './services/customer-support.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
   // canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'access',
    component: AccessComponent
  },
  {
    path: 'notfound',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CustomerSupportService]
})
export class AppRoutingModule { }
