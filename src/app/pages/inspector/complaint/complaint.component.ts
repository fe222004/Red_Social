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
    name_offender:['',[Validators.required]],
     problem:['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
     problem_date: ['',[Validators.required]],
     problem_hour: ['',[Validators.required]],
     severity:['',[Validators.required]]
   })
   constructor(private formBuilder:FormBuilder, private readonly revisorService: RevisorService ){}

   reset() {
    this.logForm.reset();
  }
   
     createForm() {
      if (this.logForm.valid) {
        alert('Valido',);
        const complaintDateValue = this.logForm.value.problem_date;
        const problem_date: Date = complaintDateValue ? new Date(complaintDateValue) : new Date();
        const complaint: Complaint = {
       name_offender: this.logForm.value.name_offender || '',
        problem: this.logForm.value.problem || '',
        problem_date: problem_date,
        problem_hour: this.logForm.value.problem_hour || '',
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

