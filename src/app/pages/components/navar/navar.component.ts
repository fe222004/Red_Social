import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrl: './navar.component.scss',
})
export class NavarComponent {

  private readonly authService: AuthService = inject(AuthService);

  user: User = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    image: '',
    description: '',
    countryId: 0,
  };

  constructor(private router: Router,private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUser(userId).subscribe((response: User) => {
          console.log('this is the get user', response);
          this.user = response;
        });
      }
    });
  }

  navigateToProfile() {
    const userId = this.authService.getUserId(); //Obtiene el userID del AuthService
    if (userId) {
      this.router.navigate(['/pages/user/profile', userId]); // Pasar ID de usuario como parámetro de ruta
    } else {
    }
  }


}
