import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);

    protected comentForm: FormGroup;

    constructor() {
      this.comentForm = this.builForm
    }
        get builForm(): FormGroup{
          return this.formBuilder.group({
            id: 0,
            coment:['', Validators.required, Validators.minLength(30)],
          });
        }

        get id(): AbstractControl {
          return this.comentForm.controls['id']
        }

        get coment(): AbstractControl {
          return this.comentForm.controls['coment']
        }


}
