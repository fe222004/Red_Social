import { Component } from '@angular/core';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.scss'
})
export class ComplaintComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
 
}

