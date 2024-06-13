import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-comments',
  templateUrl: './more-comments.component.html',
  styleUrl: './more-comments.component.scss'
})
export class MoreCommentsComponent {
  @Input() comments: string[] = [];
}
