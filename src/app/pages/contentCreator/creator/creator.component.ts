import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent  {
  protect user : any = NULL;

  private readonly userService: UserService = inject(UserService);

  constructor(){
    this.findUser()
  }

  findUser(){
  this.userService.findUser().suscribe(response => {
  this.user = response
  }
  createUser(playload :any){
  this.userService.createUser().suscribe(response => {

  }
  
}
