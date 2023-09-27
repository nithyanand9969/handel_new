// // import { Component } from '@angular/core';
// // import { NetworkcallService } from 'src/app/service/networkcall.service';

// // @Component({
// //   selector: 'app-userinfo',
// //   templateUrl: './userinfo.component.html',
// //   styleUrls: ['./userinfo.component.scss']
// // })
// // export class UserinfoComponent {

// //   corporateuser:any;
// //   constructor(public url:NetworkcallService){
// //  }
 
// //  ngOnInit(): void {
   
// //    this.url.getcorporateuser().subscribe((res:any) =>{
// //      this.corporateuser = res;
     
// //    }); 
// //  }

// // }

// import { Component } from '@angular/core';
// import { NetworkcallService } from 'src/app/service/networkcall.service';

// @Component({
//   selector: 'app-userinfo',
//   templateUrl: './userinfo.component.html',
//   styleUrls: ['./userinfo.component.scss']
// })
// export class UserinfoComponent {

//   corporateuser: any;
//   selectedUser: any;

//   constructor(public url: NetworkcallService) { }

//   ngOnInit(): void {
//     this.url.getcorporateuser().subscribe((res: any) => {
//       this.corporateuser = res;
//     });
//   }

//   selectUser(user: any): void {
//     this.selectedUser = user;
//   }
// }

import { Component } from '@angular/core';
import { NetworkcallService } from 'src/app/service/networkcall.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent {

  corporateuser: any;
  selectedUser: any;

  constructor(public url: NetworkcallService) { }

  ngOnInit(): void {
    this.url.getcorporateuser().subscribe((res: any) => {
      this.corporateuser = res;
    });
  }

  selectUser(user: any): void {
    this.selectedUser = user;
  }
}
