import { Component, OnInit, inject } from '@angular/core';
import { ComentService } from '../../services/coment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit{
  
  private readonly comentService = inject(ComentService);        

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
