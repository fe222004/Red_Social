import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly userService: UserService = inject(UserService);

  public loginForm: FormGroup;
  public imageSrc: string | ArrayBuffer | null | undefined = null;
  public files: any[] = [];

  constructor() {
    this.loginForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      image: [null],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      countryId: ['', Validators.required],
      rolId: ['', Validators.required],
      description: ['']
    });
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

  onSubmit() {
    console.log('Se ha hecho clic en el botón de envío.');
    if (this.loginForm.invalid) {
      console.log('El formulario no es válido.');
      return;
    }

    const formData = new FormData();
    formData.append('lastname', this.loginForm.value.lastname);
    formData.append('firstname', this.loginForm.value.firstname);
    formData.append('email', this.loginForm.value.email);
    formData.append('password', this.loginForm.value.password);
    formData.append('countryId', this.loginForm.value.countryId);
    formData.append('rolId', this.loginForm.value.rolId);
    formData.append('description', this.loginForm.value.description);

    const file = this.files[0];
    if (file) {
      formData.append('image', file, file.name);
    }

    console.log(formData)
    this.userService.createUser(formData).subscribe(
      (response: User) => {
        console.log('User created successfully:', response);
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  chooseFile() {
    const inputElement = document.getElementById('fileInput') as HTMLInputElement;
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
