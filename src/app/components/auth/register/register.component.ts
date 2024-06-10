import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);
  private readonly userService: UserService = inject(UserService);

  public loginForm: FormGroup;
  public imageSrc: string | ArrayBuffer | null = null;
  public files: any = [];
  
  constructor() {
    this.loginForm = this.buildForm;
  }

  get buildForm(): FormGroup {
    return (this.loginForm = this.formBuilder.group({
      image: [null],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      countryId: ['', Validators.required],
      rolId: ['', Validators.required],
      description: ['']
    }));
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Aquí puedes enviar los datos del formulario al servidor
    }

    if (this.loginForm.invalid) {
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
  formData.append('image', file, file.name);

  const selectedActors = this.loginForm.value.actor_id;
  selectedActors.forEach((actorId: number) => {
      formData.append('actor_id[]', actorId.toString());
  });

  this.userService.createUser(formData).subscribe((response) => {
  });
  }

  chooseFile() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  getFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          this.imageSrc = result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  clearImage() {
    this.imageSrc = null;
    this.loginForm.get('image')?.setValue(null);
  }

  onDrop(event: DragEvent) {
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
      const result = e.target?.result;
      if (result) {
        this.imageSrc = result;
      }
    };
    reader.readAsDataURL(file);
    this.loginForm.get('image')?.setValue(file);
  }

}
