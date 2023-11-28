import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  loggedInUserName: string = ''; // Variable to store the logged-in user's name

  constructor(private router: Router, private authService: AuthService) {}

  isDashboardRouteActive(): boolean {
    return this.router.url === '/admin';
  }

  // Fetch user details after successful login and display the user's name in the welcome area
  fetchUserDetails(): void {
    this.authService.getUserDetails().subscribe(
      (userDetails: any) => {
        // Assuming userDetails contains user information including the name
        this.loggedInUserName = userDetails.name; // Replace 'name' with the actual field containing the user's name
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to fetch user details:', error);
      }
    );
  }
}
