import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  valCheck: string[] = ['remember'];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      rememberMe: [false]
    });
  }

  get email(): AbstractControl {
    return this.loginForm.controls['email'];
  }
  get password(): AbstractControl {
    return this.loginForm.controls['password'];
  }
  
  //password!: string;

  navigateToDashboard() {
    this.router.navigate(['/pages/form']);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login successful:', response);
          this.router.navigate(['/pages/dashboard']); // Redirigir a la página de perfil o cualquier otra página
        },
        error => {
          console.error('Login failed:', error);
          alert('Login failed');
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
