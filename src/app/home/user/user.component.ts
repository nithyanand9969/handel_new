import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CorporateregisterService } from 'src/app/service/corporateregister.service';
import { NetworkcallService } from 'src/app/service/networkcall.service';

 


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  implements OnInit{
  corporateuser:any;
 constructor(public url:NetworkcallService){
}

selectUser(user: any): void {
  this.selectUser = user;
}
ngOnInit(): void {
  
  this.url.getcorporateuser().subscribe((res:any) =>{
    this.corporateuser = res;
    
  }); 
}

}




