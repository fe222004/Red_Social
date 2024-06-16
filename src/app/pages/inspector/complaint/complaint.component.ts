import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Complaint } from '../../../models/Complaint';
import { RevisorService } from '../../../services/revisor.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.scss'
})
export class ComplaintComponent {
  loginError: string='';
  logForm=this.formBuilder.group({
    infractor:['',[Validators.required]],
     problem:['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    complaint_date: ['',[Validators.required]],
     time: ['',[Validators.required]],
     severity:['',[Validators.required]]
   })
   constructor(private formBuilder:FormBuilder, private readonly revisorService: RevisorService ){}

   reset() {
    this.logForm.reset();
  }
   
     createForm() {
      if (this.logForm.valid) {
        alert('Valido',);
        const complaintDateValue = this.logForm.value.complaint_date;
        const date_complaint: Date = complaintDateValue ? new Date(complaintDateValue) : new Date();
        const complaint: Complaint = {
        infractor: this.logForm.value.infractor || '',
        problem: this.logForm.value.problem || '',
        date_complaint: date_complaint,
        time: this.logForm.value.time || '',
        severity: this.logForm.value.severity === 'grave'
      };
       this.revisorService.createForm(complaint).subscribe(response => {
        console.log(response);
      });
       this.logForm.reset
          } else{
            alert('no valido')
         this.logForm.markAllAsTouched();
         } 
    }
}

