import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-create',
  templateUrl: './new-create.component.html',
  styleUrl: './new-create.component.scss'
})
export class NewCreateComponent  {
  private formBuilder = inject(FormBuilder);
  protected form: FormGroup;
  imageSrc: string | ArrayBuffer | null = null;
  showModal: boolean = false;

  constructor() {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      image: ['', Validators.required],
    });
  }

  chooseFile() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  getFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          this.imageSrc = result;
        }
      };
      reader.readAsDataURL(file);
      this.form.get('image')?.setValue(file);
    }
  }

  clearImage() {
    this.imageSrc = null;
    this.form.get('image')?.setValue(null);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
      // Aquí puedes llamar a tu servicio para guardar los datos
      this.closeModal();
    }
  }
}