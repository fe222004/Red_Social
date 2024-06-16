import { Component, OnInit, inject } from '@angular/core';
import { ComentService } from '../../../services/coment.service';
import { ComentI } from '../../../models/coment.interface';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent{
  
  private readonly comentService = inject(ComentService);  
  
  isVisible = false;
  comments: ComentI[] = [
    { text: 'Este es un comentario de ejemplo' },
    { text: 'Otro comentario de ejemplo' }
  ];
  newComment: string = '';

  ngOnInit(): void {
    this.comentService.modalVisibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  closeModal() {
    this.comentService.hideModal();
  }



}
