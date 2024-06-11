import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = 'http://localhost:3000/users';

  constructor() { }

  createUser(formData: FormData) {
    console.log(formData)
    return this.httpClient.post<User>(this.apiUrl, formData);
  }
}
