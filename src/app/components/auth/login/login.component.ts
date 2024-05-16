//import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService, LoginResponse } from 'src/app/service/auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    ngForm: FormGroup;

    constructor(
        private layoutService: LayoutService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.ngForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rememberMe: [false],
        });
    }

    get dark(): boolean {
        return this.layoutService.config.colorScheme !== 'light';
    }

    onSubmit(): void {
        if (this.ngForm.invalid) {
            return;
        }

        this.authService
            .login(this.ngForm.value)
            .subscribe((response: LoginResponse) => {
                
                console.log(response);
                console.log( response['accessToken']);

                if (typeof response['accessToken'] === 'string') {
                    localStorage.setItem('accessToken', response['accessToken']);
                    this.router.navigate([Constants.routes.root]);
                } else {
                    // Manejar el caso en el que 'accessToken' no sea un string
                    console.error('El accessToken no es de tipo string');
                }
            });
    }
}
