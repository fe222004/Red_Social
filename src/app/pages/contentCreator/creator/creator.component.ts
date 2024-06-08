import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent  {

  private readonly userService: UserService = inject(UserService);

  constructor(){
    this.findUser()
  }

  findUser(){
  this.userService.findUser()
  }
  
}
