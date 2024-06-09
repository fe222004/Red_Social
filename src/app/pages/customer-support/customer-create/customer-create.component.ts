import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  

  mostrarFormularioQuejas = false;
  mostrarFormularioQuejasAdvertencia = false;
  advertenciaMensaje: string = '';

  private formBuilder = inject(FormBuilder);

  protected form: FormGroup;

  constructor() {
    this.form = this.buildForm;
  }

  get buildForm(): FormGroup {
    return this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]], // Modified email validator
      solution: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', Validators.required],
      complaint_number: ['', [Validators.required, Validators.min(1)]], // min value added for number
      suspended_account: [false, Validators.required] // default false and required
    });
  }

  get name(): AbstractControl {
    return this.form.controls['name']
  }
  get lastname(): AbstractControl {
    return this.form.controls['lastname']
  }
  get email(): AbstractControl {
    return this.form.controls['email']
  }
  get solution(): AbstractControl {
    return this.form.controls['solution']
  }
  get date(): AbstractControl {
    return this.form.controls['date']
  }
  get complaint_number(): AbstractControl {
    return this.form.controls['complaint_number']
  }
  get suspended_account(): AbstractControl {
    return this.form.controls['suspended_account']
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


  validataForm() {
    if (this.form.valid) {
      alert('Registrado');
      this.ocultarFormulario();
    } else {
      alert('No registrado');
    }
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
