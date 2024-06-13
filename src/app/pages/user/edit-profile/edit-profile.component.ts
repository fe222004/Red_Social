import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  private formBuilder : FormBuilder = inject(FormBuilder);
  protected editForm : FormGroup;

  constructor(){
    this.editForm = this.buildForm;
  }

  get buildForm(): FormGroup {
    return this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.minLength(30)]],
      city: ['', [Validators.required, Validators.minLength(15)]],
      contry: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(60)]]
    })
  }

  validateEditForm(){
    if(this.editForm.valid){
      alert('valido');
    }
    else{
      alert('no valido')
    }
  }
}
