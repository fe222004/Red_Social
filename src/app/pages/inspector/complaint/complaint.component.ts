import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevisorService } from '../../../services/revisor.service';
import { PostService } from '../../../services/post.service';
import { PostI } from '../../../models/post.interface';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss'],
})
export class ComplaintComponent {
  @ViewChild('closeModalButton') closeModalButton!: ElementRef;

  posts: PostI[] = [];
  logForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private revisorService: RevisorService,
    private postService: PostService
  ) {
    this.logForm = this.formBuilder.group({
      name_offender: ['', [Validators.required]],
      problem: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      problem_date: ['', [Validators.required]],
      problem_hour: ['', [Validators.required]],
      severity: [true, [Validators.required]],
    });

    this.fetchPosts();
  }

  get name_offender(): AbstractControl {
    return this.logForm.controls['name_offender'];
  }

  get problem(): AbstractControl {
    return this.logForm.controls['problem'];
  }

  get problem_date(): AbstractControl {
    return this.logForm.controls['problem_date'];
  }

  get problem_hour(): AbstractControl {
    return this.logForm.controls['problem_hour'];
  }

  get severity(): AbstractControl {
    return this.logForm.controls['severity'];
  }

  reset(): void {
    this.logForm.reset();
  }

  createForm(): void {
    if (this.logForm.valid) {
      this.revisorService.createForm(this.logForm.value).subscribe(
        (response) => {
          console.log('Formulario enviado:', response);
          alert('Formulario enviado correctamente');
          this.logForm.reset();
          this.closeModalButton.nativeElement.click();
        },
        (error) => {
          console.error('Error al enviar formulario:', error);
          alert('Ocurrió un error al enviar el formulario');
        }
      );
    } else {
      alert('Formulario no válido');
      this.logForm.markAllAsTouched();
    }
  }

  fetchPosts(): void {
    this.postService.findPosts().subscribe(
      (posts: PostI[]) => {
        this.posts = posts;
        console.log('Posts recuperados:', posts);
      },
      (error) => {
        console.error('Error al recuperar posts:', error);
      }
    );
  }
}
