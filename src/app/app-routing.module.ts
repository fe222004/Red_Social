import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ErrorComponent } from './components/auth/error/error.component';
import { AccessComponent } from './components/auth/access/access.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormSuscriptorComponent } from './pages/components/form-suscriptor/form-suscriptor.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormSuscriptorComponent
  },
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
    //canActivate: [AuthGuard]
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
