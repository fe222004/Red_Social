import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log('Login request sent to:', `${this.apiUrl}/auth/login`);
    console.log('Login credentials:', { email, password });

    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        map(response => {
          console.log('Login response:', response);

          if (response && response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('email', response.email);
            localStorage.setItem('role', response.role);
          }
          return response;
        })
      );
  }

  logout(): void {
    console.log('Logging out');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    const loggedIn = !!localStorage.getItem('token');
    console.log('Is logged in:', loggedIn);
    return loggedIn;
  }
}
