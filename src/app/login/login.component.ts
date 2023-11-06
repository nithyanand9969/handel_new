import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: { email: string, password: string } = { email: '', password: '' };

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.login(this.user.email, this.user.password)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);7
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login failed:', error);
          // Handle login error, e.g., display an error message
        }
      );
  }
}
