import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ResolverI } from '../../../models/resolver';
import { ResolverService } from '../../../services/resolver.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  mostrarFormularioModal = false;
  private formBuilder = inject(FormBuilder);
  private readonly resolverService: ResolverService = inject(ResolverService);  
  protected form: FormGroup;

  resolvers : ResolverI[]=[];
  resolver : ResolverI = {};


  constructor(private router: Router) {
    this.getResolvers();
    this.form = this.buildForm;
  }

  get buildForm(): FormGroup {
    return (this.form = this.formBuilder.group({
      suspended_account: ['', Validators.required],
      status: ['', Validators.required],
    }));
  }

  get suspended_account(): AbstractControl {
    return this.form.controls['suspended_account'];
  }
  get status(): AbstractControl {
    return this.form.controls['status'];
  }

  getResolvers(){
    console.log("Entro al resolvers")
    this.resolverService.findResolver().subscribe(response => {
      console.log(response)
      this.resolvers = response
    });
  }

  //ACTUALIZA
  updateResolver(){
    console.log("Actualiza")
    this.resolverService.updateResolver('1', {}).subscribe(response => {
      
    })
  }

  openEditModal(){
    this.mostrarFormularioModal = true;

  }
  closeEditModal() {
    this.mostrarFormularioModal = false;
  }

  onSubmit(): void {
    console.log("Entro")
  
  }

  validataForm() {
    if (this.form.valid) {
      alert('Actualizado');
    } else {
      alert('No actualizado');
    }
  }

  navigateToCustomerCreate() {
    this.router.navigate(['/pages/customer-create']);
  }
 




}
