import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Country } from '../../../models/country';
import { CountryService } from '../../../services/country.service';
import { Rol } from '../../../models/rol';
import { RolService } from '../../../services/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly userService: UserService = inject(UserService);

  private readonly countryService: CountryService = inject(CountryService);
  private readonly rolService: RolService = inject(RolService);

  public loginForm: FormGroup;
  public imageSrc: string | ArrayBuffer | null | undefined = null;
  public files: any[] = [];
  public errorMessage: string | null = null;

  countries: Country[] = [];
  roles: Rol[] = [];

  constructor(private router: Router) {
    this.loginForm = this.buildForm();
    this.getCountries();
    this.getRol();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(40),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(40),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
          ),
        ],
      ],
      image: [''],
      description: ['', [Validators.maxLength(200)]],
      countryId: [''],
      rolId: [''],
    });
  }

  get image(): AbstractControl {
    return this.loginForm.controls['image'];
  }
  get lastname(): AbstractControl {
    return this.loginForm.controls['lastname'];
  }
  get firstname(): AbstractControl {
    return this.loginForm.controls['firstname'];
  }
  get email(): AbstractControl {
    return this.loginForm.controls['email'];
  }
  get password(): AbstractControl {
    return this.loginForm.controls['password'];
  }
  get countryId(): AbstractControl {
    return this.loginForm.controls['countryId'];
  }
  get city(): AbstractControl {
    return this.loginForm.controls['city'];
  }
  get rolId(): AbstractControl {
    return this.loginForm.controls['rolId'];
  }
  get description(): AbstractControl {
    return this.loginForm.controls['description'];
  }

  getFile(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
      this.files = [file];
    }
  }

  getCountries() {
    this.countryService.findCountries().subscribe((response) => {
      console.log(response);
      this.countries = response;
    });
  }

  getRol() {
    this.rolService.findRol().subscribe((response) => {
      console.log(response);
      this.roles = response;
    });
  }

  onSubmit() {
    console.log('Se ha hecho clic en el botón de envío.');
    if (this.loginForm.invalid) {
      console.log('El formulario no es válido.');
      return;
    }

    const formData = new FormData();

    formData.append('lastname', this.loginForm.value.lastname);
    console.log('lastname:', this.loginForm.value.lastname);

    formData.append('firstname', this.loginForm.value.firstname);
    console.log('firstname:', this.loginForm.value.firstname);

    //this.userService.createUser(formData).subscribe((response) => {
    //});
    formData.append('email', this.loginForm.value.email);
    console.log('email:', this.loginForm.value.email);

    formData.append('password', this.loginForm.value.password);
    console.log('password:', this.loginForm.value.password);

    formData.append('countryId', this.loginForm.value.countryId);
    console.log('countryId:', this.loginForm.value.countryId);

    formData.append('rolId', this.loginForm.value.rolId);
    console.log('rolId:', this.loginForm.value.rolId);

    formData.append('description', this.loginForm.value.description);
    console.log('description:', this.loginForm.value.description);

    const file = this.files[0];
    formData.append('image', file, file.name);
    console.log(file.name);

    // Verificar que formData contiene los datos correctos
    formData.forEach((value, key) => {
      console.log(key + ': ' + value);
    });

    this.userService.createUser(formData).subscribe(
      (response: User) => {
        console.log('User created successfully:', response);
        this.errorMessage = null; // Clear error message
        this.router.navigate(['']); // Redirigir a la página de perfil o cualquier otra página

      },
      (error) => {
        console.error('Error creating user:', error);
        this.errorMessage = error; // Display error message
      }
    );
  }

  chooseFile() {
    const inputElement = document.getElementById(
      'fileInput'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }

  clearImage() {
    console.log('Se ha hecho clic en el botón de limpiar imagen.');
    this.imageSrc = null;
    this.files = [];
    this.loginForm.get('image')?.setValue(null);
  }

  onDrop(event: DragEvent) {
    console.log('Se ha soltado un archivo.');
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  private handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target?.result;
    };
    reader.readAsDataURL(file);
    this.files = [file];
  }
}
