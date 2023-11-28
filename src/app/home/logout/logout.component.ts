import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router ) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
       this.router.navigate(['/login']);
      },
      (      error: any) => {
        console.error('Logout failed:', error);
        // Handle logout failure, if needed
      }
    );
  }
}
