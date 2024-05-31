import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard'; // Asegúrate de usar la ruta correcta para el guard
import { LoginComponent } from './components/auth/login/login.component';
import { ErrorComponent } from './components/auth/error/error.component';
import { AccessComponent } from './components/auth/access/access.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


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
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
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
