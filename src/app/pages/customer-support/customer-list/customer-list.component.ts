import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {

  constructor(private router: Router) {}

  navigateToCustomerCreate() {
    this.router.navigate(['/pages/customer-create']);
  }

}
