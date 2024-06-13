import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Complaint } from '../../../interfaces/Complaint';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.scss'
})
export class ComplaintComponent {
  loginError: string='';
  logForm=this.formBuilder.group({
    infractor:['',[Validators.required]],
     problem:['', [Validators.required,Validators.pattern('[a-zA-z]*')]],
    complaint_date: [new Date(), [Validators.required]],
     time: ['',[Validators.required]],
     severity:[false,[Validators.requiredTrue]]
   })
   constructor(private formBuilder:FormBuilder ){}

  get infractor() {
    return this.logForm.get('infractor');
  }

  get problem() {
    return this.logForm.get('problem');
  }

  get date_complaint() {
    return this.logForm.get('complaint_date');
  }

  get time() {
    return this.logForm.get('time');
  }

  get severity() {
    return this.logForm.get('severity');
  }

   login(){
     if (this.logForm.valid) {
      alert('Valido',)
      console.log()
       this.logForm.reset
        } else{
          alert('no valido')
       this.logForm.markAllAsTouched();
       
     } 
     } 

     reset(){
      this.logForm.reset
     }
}

