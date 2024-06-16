import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = 'http://localhost:3000/users';

  constructor() { }

  createUser(formData: FormData) {
    console.log('llego al servidor',formData);
    return this.httpClient.post<User>(this.apiUrl, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      if (error.status === 400 && error.error.message.includes('User already exists')) {
        errorMessage = 'A user with this email already exists.';
      } else {
        errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
