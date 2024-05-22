import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerSupportRoutingModule } from './customer-support-routing.module';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerSupportRoutingModule,
    ButtonModule
  ]
})
export class CustomerSupportModule { }
