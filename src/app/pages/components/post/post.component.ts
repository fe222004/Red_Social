
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { PostI } from '../../../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected postForm: FormGroup;
  private readonly postService = inject(PostService)
  protected posts: PostI[] = [];
  protected post: PostI = {};


    constructor() {
      this.postForm = this.buildForm
    }

    get buildForm(): FormGroup {
      return (this.postForm = this.formBuilder.group({
        text: ['', [Validators.required, Validators.minLength(2)]],
        tag: ['', [Validators.minLength(2)]],
        
      }));
    }

      
        get text(): AbstractControl {
          return this.postForm.controls['text'];
        }
        get tag(): AbstractControl {
          return this.postForm.controls['tag'];
        }


        onSubmit() {
          console.log('Entro al sumbmit');
          if (this.postForm.invalid) {
            console.log('El formulario no es válido.');
            return;
          }

          this.postService.createPost(this.postForm.value).subscribe(() => {
            console.log("ENTRO", this.postForm.value)
          });
        }

        crearPost() {
          if (this.postForm.valid) {
            alert('Registrado');
            this.postService.createPost(this.postForm.value).subscribe(() => {
            });
            console.log("Entro", this.postForm.value)
          } else {
            alert('No registrado');
          }
          console.log("Ingreso aqui")
        }      
      
}
