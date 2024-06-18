import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})


export class MenuComponent{

  private allSideMenu!: NodeListOf<HTMLAnchorElement>;
  private menuBar!: HTMLElement | null;
  private sidebar!: HTMLElement | null;
  private searchButton!: HTMLButtonElement | null;
  private searchButtonIcon!: HTMLElement | null;
  private searchForm!: HTMLFormElement | null;
  private switchMode!: HTMLInputElement | null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a') as NodeListOf<HTMLAnchorElement>;
    this.menuBar = document.querySelector('#content nav .bx.bx-menu');
    this.sidebar = document.getElementById('sidebar');
    this.searchButton = document.querySelector('#content nav form .form-input button');
    this.searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
    this.searchForm = document.querySelector('#content nav form');
    this.switchMode = document.getElementById('switch-mode') as HTMLInputElement;

    this.initializeMenu();
    this.initializeSidebarToggle();
    this.initializeSearchButton();
    this.handleWindowResize();
    this.initializeSwitchMode();
  }

  private initializeMenu(): void {
    this.allSideMenu.forEach(item => {
      const li = item.parentElement as HTMLLIElement;

      item.addEventListener('click', () => {
        this.allSideMenu.forEach(i => {
          const parent = i.parentElement as HTMLLIElement;
          parent.classList.remove('active');
        });
        li.classList.add('active');
      });
    });
  }

  private initializeSidebarToggle(): void {
    this.menuBar?.addEventListener('click', () => {
      this.sidebar?.classList.toggle('hide');
    });

    if (window.innerWidth < 768) {
      this.sidebar?.classList.add('hide');
    }
  }

  private initializeSearchButton(): void {
    this.searchButton?.addEventListener('click', (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        this.searchForm?.classList.toggle('show');
        if (this.searchForm?.classList.contains('show')) {
          this.searchButtonIcon?.classList.replace('bx-search', 'bx-x');
        } else {
          this.searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        }
      }
    });

    if (window.innerWidth > 576) {
      this.searchButtonIcon?.classList.replace('bx-x', 'bx-search');
      this.searchForm?.classList.remove('show');
    }
  }

  private handleWindowResize(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        this.searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        this.searchForm?.classList.remove('show');
      }
    });
  }

  private initializeSwitchMode(): void {
    this.switchMode?.addEventListener('change', () => {
      if (this.switchMode?.checked) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

  logout(): void {
    this.authService.logout(); // Llama al método logout del AuthService para eliminar el token y otros datos de sesión
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión u otra página según tu aplicación
  }
}
