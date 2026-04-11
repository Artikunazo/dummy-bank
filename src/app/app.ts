import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class App implements OnInit {
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.initialize();
  }

  logout() {
    this.authService.signOut();
  }
}
