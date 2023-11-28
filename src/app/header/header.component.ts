import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Import your authentication service

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedInUserName: string = ''; // Property to hold the logged-in user's name
  entityList: any;

  constructor(private authService: AuthService) { } // Inject the AuthService

  ngOnInit() {
    this.checkUserLoginStatus();
  }

  checkUserLoginStatus() {
    const isLoggedIn = this.authService.isAuthenticated(); // Check if the user is authenticated

    if (isLoggedIn) {
      // Fetch user details if authenticated
      this.authService.getUserDetails().subscribe(
        (userDetails: any) => {
          this.loggedInUserName = userDetails.name; // Assuming 'name' is the property holding the user's name
          // Fetch entityList based on user authentication
          // Example: this.entityList = this.authService.getEntityList();
        },
        (error: any) => {
          console.error('Failed to fetch user details:', error);
        }
      );
    }
  }
}
