import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  mostrarFormularioencuesta = false;
 

  private formBuilder = inject(FormBuilder);

  protected form: FormGroup;

  constructor() {
    this.form = this.buildForm;

  }

  get buildForm(): FormGroup {
    return (this.form = this.formBuilder.group({
      categoriasFavoritas:['', Validators.required],
      tipoContenido: ['', Validators.required],
      metodoNotificacion: ['', Validators.required],
      idioma: ['', Validators.required],
      horariosNotificaciones: ['', Validators.required]
    }));
  }

  get categoriasFavoritas(): AbstractControl {
    return this.form.controls['categoriasFavoritas'];
  }
  get tipoContenido(): AbstractControl {
    return this.form.controls['tipoContenido'];
  }
  get metodoNotificacion(): AbstractControl {
    return this.form.controls['metodoNotificacion'];
  }
  get idioma(): AbstractControl {
    return this.form.controls['idioma'];
  }
  get horariosNotificaciones(): AbstractControl {
    return this.form.controls['horariosNotificaciones'];
  }
  
  mostrarFormulario() {
    this.mostrarFormularioencuesta = true;
  }

  ocultarFormulario() {
    this.mostrarFormularioencuesta = false;
  }

  onSubmit() {
    this.validataFormulario();
  }

  validataFormulario() {
    if (this.form.valid) {
      alert('Enviado');
      this.ocultarFormulario();
    } else {
      alert('No enviado');
    }
  }

}
