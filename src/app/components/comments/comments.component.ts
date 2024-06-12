import { Component, inject } from '@angular/core';
import { ComentService } from '../../services/coment.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentI } from '../../models/coment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected comentForm: FormGroup;
 
  private readonly comentService = inject(ComentService);
  protected coments : ComentI[] = [];
  protected coment: ComentI = {};


    constructor() {
      this.comentForm = this.builForm
      this.findComents();
    }
        get builForm(): FormGroup{
          return this.formBuilder.group({
            id: 0,
            comment:['', Validators.required, Validators.minLength(30)],
          });
        }

        get id(): AbstractControl {
          return this.comentForm.controls['id']
        }

        get comment(): AbstractControl {
          return this.comentForm.controls['comment']
        }


        validateComentForm(){
          if (this.comentForm.valid) {
            alert('valido');
          } else {
            alert('No valido');
          }
        }

        findComents(){
          this.comentService.findComentS().subscribe(response => {
            this.coments = response;
            console.log(this.coments)
          })
        }

        createComent(){
          this.comentService.createComent({}).subscribe(response => {
            console.log(response);
          })
        }

        updateComent(){
          this.comentService.updateComent('1', {}).subscribe(response => {
            console.log(response);
          })
        }

        deleteComent(){
          this.comentService.deleteComent('1').subscribe(response => {
            console.log(response)
          })
        }

        findOneComent(id : string){
          this.comentService.findComentOne(id).subscribe(response => {
            this.coment = response
          })
        }

  //Visualizaion solo de 2 comentarios en el perfil
  comments: string[] = [];
  showMoreComments = false;

  ngOnInit(): void {
    this.comments = this.comentService.getComments();
  }

  get firstTwoComments(): string[] {
    return this.comments.slice(0, 2);
  }

  get remainingComments(): string[] {
    return this.comments.slice(2);
  }

  toggleShowMoreComments() {
    this.showMoreComments = !this.showMoreComments;
  }
}
