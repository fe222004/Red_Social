import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ResolverI } from '../../../models/resolver';
import { ResolverService } from '../../../services/resolver.service';
import { response } from 'express';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {  

  private readonly resolverService: ResolverService = inject(ResolverService);

  resolvers : ResolverI[]=[];


  constructor(private router: Router) {
    this.getResolvers();
  }

  getResolvers(){
    console.log("Entro al resolvers")
    this.resolverService.findResolver().subscribe(response => {
      console.log(response)
      this.resolvers = response
    });
  }

  navigateToCustomerCreate() {
    this.router.navigate(['/pages/customer-create']);
  }


}
