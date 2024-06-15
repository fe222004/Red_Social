import { Component, OnInit, inject } from '@angular/core';
import { ComentService } from '../../../services/coment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent{
  
  private readonly comentService = inject(ComentService);        

}
