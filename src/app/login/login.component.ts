  import { Component, OnInit, resolveForwardRef } from '@angular/core';
  import { Router } from '@angular/router';
  import { NetworkcallService } from '../service/networkcall.service';

    @Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.scss']
    })
    export class LoginComponent implements OnInit {
    
      user: any = {};
    
      constructor(private router: Router, private url: NetworkcallService) { }
    
      ngOnInit(): void {
        // Initialization logic here
      }
    
      Login() {
        this.url.logincor(this.user)
          .subscribe({
            next: (res) => {
              console.warn(res);
              this.router.navigate(['/home/user']);
              this.showSuccessAlert();
            },
            error: (err: any) => {
              this.showInvalidCredentialsAlert();
            }
          });
      }
    
      private showSuccessAlert() {
        alert('Successful login');
      }
    
      private showInvalidCredentialsAlert() {
        alert('Invalid Username and Password');
      }
    }
    