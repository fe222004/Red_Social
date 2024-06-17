import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }


  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = 'http://localhost:3000/users';


  createUser(formData: FormData) {
    console.log('llego al servidor',formData);
    return this.httpClient.post<User>(this.apiUrl, formData);
  }
}

