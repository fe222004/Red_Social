import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

const routes: Routes = [
  {
    path: 'customer-create',
    component: CustomerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSupportRoutingModule { }
