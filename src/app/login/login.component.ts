import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailId: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.loginUser(this.emailId, this.password)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userName', response.userName); // Save the user's name
        

        
          const userEmail = this.emailId.toLowerCase(); // Convert email to lowercase for consistency
          const domain = userEmail.split('@')[1]; // Get the domain part of the email
        
          if (domain === 'handel.co.in') {
            this.router.navigate(['/admin']); // Redirect to admin dashboard
          } else {
            this.router.navigate(['/users']); // Redirect to user dashboard
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password. Please try again.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
          console.error('Login failed:', error);
        }
      );
  }
}
