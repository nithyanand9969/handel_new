import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  forget : any = {};

  
}

// forget() {
//   this.url.logincor(this.forget)
//     .subscribe({
//       next: (res) => {
//         console.warn(res);
//         this.router.navigate(['/home/user']);
//         this.showSuccessAlert();
//       },
//       error: (err: any) => {
//         this.showInvalidCredentialsAlert();
//       }
//     });

  // }
