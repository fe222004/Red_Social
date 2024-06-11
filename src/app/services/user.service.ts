import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient: HttpClient = inject(HttpClient);
  //private apiURLUser: string = `${environment.apiUrl}/users`;


  constructor() { }


  findUser() {
    //this.httpClient.get(this.apiURLUser)
  }

  createUser(playload: any) {
    //return this.httpClient.post(this.apiURLUser, playload)
  }

  editUser(playload: any) {
    //return this.httpClient.post('http:localhosth:3000/user/'+id,playload)
  }
}
