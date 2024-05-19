import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerSupportRoutingModule } from './customer-support-routing.module';
import { CustomerCreateComponent } from './customer-create/customer-create.component';


@NgModule({
  declarations: [
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerSupportRoutingModule
  ]
})
export class CustomerSupportModule { }
