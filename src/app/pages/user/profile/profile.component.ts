import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentService } from '../../../services/coment.service';
import { ComentI } from '../../../models/coment.interface';
import { PostService } from '../../../services/post.service';
import { PostI } from '../../../models/post.interface';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected comentForm: FormGroup;

  private readonly comentService = inject(ComentService);
  private readonly postService = inject(PostService);
  protected coments: ComentI[] = [];
  protected posts: PostI[] = [];
  protected post: PostI = {};

  constructor(private router: Router) {
    this.comentForm = this.buildForm
    this.findComents();
    this.findPost();
  }
  get buildForm(): FormGroup {
    return (this.comentForm = this.formBuilder.group({
      coment: ['', [Validators.required, Validators.minLength(10)]],      
    }));
  }


  onSubmit() {
    console.log('Se ha hecho clic en el botón de envío.');
  }

  // crearComent() {
  //   if (this.comentForm.valid) {
  //     alert('Registrado');
  //     this.comentService.createComent(this.comentForm.value).subscribe(() => {
  //     });
  //     console.log("Entro", this.comentForm.value)
  //   } else {
  //     alert('No registrado');
  //   }
  //   console.log("Ingreso aqui")
  // } 

  findComents() {
    this.comentService.findComentS().subscribe(response => {
      this.coments = response;
      console.log(this.coments)
    })
  }
  updateComent() {
    this.postService.updatePost('', {}).subscribe(response => {
      console.log(response);
    })
  }

  deleteComent() {
    this.postService.deletePost('').subscribe(response => {
      console.log(response)
    })
  }

  
  //Post
  findPost() {
    this.postService.findPost().subscribe(response => {
      this.posts = response;
      console.log(this.posts)
    })
  }

  deletePostt() {
    this.comentService.deleteComent('').subscribe(response => {
      console.log(response)
    })
  }

  navigatePost() {
    this.router.navigate(['/pages/post']);
  }
}
