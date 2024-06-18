import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ComentService } from '../../../services/coment.service';
import { ComentI } from '../../../models/coment.interface';
import { PostService } from '../../../services/post.service';
import { PostI } from '../../../models/post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected commentForm: FormGroup;

  private readonly comentService = inject(ComentService);
  private readonly postService = inject(PostService);

  protected comments: ComentI[] = [];
  protected coment: ComentI = {};
  protected posts: PostI[] = [];
  protected post: PostI = {};
  private userId?: string;
protected users : User[] = [];

  user: User = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    image: '',
    description: '',
    countryId: 0,
  };
  http: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUser(userId).subscribe((response: User) => {
          console.log('this is the get user', response);
          this.user = response;
        });
      }
    });

    this.commentForm = this.buildForm;
    this.findPost();
  }

  get buildForm(): FormGroup {
    return (this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(2)]],
    }));
  }

  get comment(): AbstractControl {
    return this.commentForm.controls['comment'];
  }

  navigateToEditUser() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.router.navigate(['/pages/user/edit', userId]); 
    } else {
    }
  }

  //Comentarios
  onSubmit() {
    console.log('Entro al sumbmit');
    if (this.commentForm.invalid) {
      console.log('El formulario no es válido.');
      return;
    }
    this.comentService.createComent(this.commentForm.value).subscribe(() => {
    });
  }

  createComent() {
    if (this.commentForm.valid) {
      this.comentService
        .createComent(this.commentForm.value)
        .subscribe(() => {});
      console.log('Entro', this.commentForm.value);
    } else{
      console.log('No se creo el comentario')
    }
  }

  updateComent(id: string) {
    this.comentService.updateComent(id, {}).subscribe((response) => {
      console.log(response);
    });
  }

  deleteComent(id: string) {
    this.comentService.deleteComent(id).subscribe((response) => {
      console.log(response);
    });
  }

  //Comentarios Modal
  openModalComents() {
    this.comentService.showModal();
  }

  //Post
  findPost() {
    this.postService.findPosts().subscribe((response) => {
      this.posts = response;
    });
  }

  updatePost(id: string) {
    this.router.navigate(['/pages/post', id]);
  }

  deletePost(id: string) {
    console.log('entro a eliminar');
    this.postService.deletePost(id).subscribe((respuesta) => {
      this.findPost();
      alert('Se eliminó');
    });
    console.log('procesando la eliminacion');
  }
}
