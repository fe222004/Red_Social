import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ResolverService } from '../../../services/resolver.service';
declare var bootstrap: any;

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss',
})
export class CustomerCreateComponent {
  mostrarFormularioQuejas = false;
  mostrarFormularioQuejasAdvertencia = false;
  advertenciaMensaje: string = '';

  private formBuilder = inject(FormBuilder);
  private readonly resolverService: ResolverService = inject(ResolverService);

  protected form: FormGroup;

  constructor(private router: Router) {
    this.form = this.buildForm;

  }

  get buildForm(): FormGroup {
    return (this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),],],
      solution: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', Validators.required],
      complaint_number: ['', [Validators.required, Validators.min(1)]],
      suspended_account: [false, Validators.required],
    }));
  }

  get name(): AbstractControl {
    return this.form.controls['name'];
  }
  get lastname(): AbstractControl {
    return this.form.controls['lastname'];
  }
  get email(): AbstractControl {
    return this.form.controls['email'];
  }
  get solution(): AbstractControl {
    return this.form.controls['solution'];
  }
  get date(): AbstractControl {
    return this.form.controls['date'];
  }
  get complaint_number(): AbstractControl {
    return this.form.controls['complaint_number'];
  }
  get suspended_account(): AbstractControl {
    return this.form.controls['suspended_account'];
  }

  //REVISAR
  onSubmit(): void {
    console.log("Entro")
    if (this.form.invalid){
      return;
    }
    this.resolverService.createResolver(this.form.value).subscribe(() => {
      console.log("Entro", this.form.value)
    });

  }

  mostrarFormulario() {
    this.mostrarFormularioQuejas = true;
  }

  ocultarFormulario() {
    this.mostrarFormularioQuejas = false;
  }

  mostrarAdvertencia() {
    this.mostrarFormularioQuejasAdvertencia = true;
  }

  ocultarAdvertencia() {
    this.mostrarFormularioQuejasAdvertencia = false;
  }

  //LLEVA DATOS AL BACK
  validataForm() {
    if (this.form.valid) {
      alert('Registrado');
      this.resolverService.createResolver(this.form.value).subscribe(() => {
      });
      console.log("Entro", this.form.value)
      //this.ocultarFormulario();
    } else {
      alert('No registrado');
    }
    console.log("Ingreso aqui")
  }

  navigateToCustomerList() {
    this.router.navigate(['/pages/customer-list']);
  }
  
 

  enviarAdvertencia() {
    if (this.advertenciaMensaje.trim() !== '') {
      alert('Advertencia enviada: ' + this.advertenciaMensaje);
      this.ocultarAdvertencia();
    } else {
      alert('El mensaje de advertencia no puede estar vacío');
    }
  }

}
