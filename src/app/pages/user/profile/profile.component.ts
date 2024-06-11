import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ComentService } from "../../../services/coment.service";
import { ComentI } from '../../../models/coment.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

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


}
