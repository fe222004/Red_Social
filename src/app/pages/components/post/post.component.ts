import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);

    protected postForm: FormGroup;

    constructor() {
      this.postForm = this.builForm
    }
        get builForm(): FormGroup{
          return this.formBuilder.group({
            id: 0,
            text : ['', Validators.required, Validators.minLength(30)],
            image : '',
            tag: ['', Validators.required, Validators.minLength(10)],
          });
        }

        get id(): AbstractControl {
          return this.postForm.controls['id']
        }

        get text(): AbstractControl {
          return this.postForm.controls['text']
        }
        get image(): AbstractControl {
          return this.postForm.controls['image']
        }
        get tag(): AbstractControl {
          return this.postForm.controls['tag']
        }


        validatePostForm() {
          if (this.postForm.valid) {
            alert('valido');
          } else {
            alert('No valido');
          }
        }


}
