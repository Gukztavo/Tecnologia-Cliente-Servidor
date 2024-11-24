import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  logout() {
    sessionStorage.clear(); // Remove o token e dados da sessão
    this.router.navigate(['/login']); // Redireciona para a tela de login
  }
  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
  navigateToCategories() {
    this.router.navigate(['/categories']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
