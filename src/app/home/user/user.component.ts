import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CorporateregisterService } from 'src/app/service/corporateregister.service';

 


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  implements OnInit{

CorporateregisterService: any;


constructor(private router:Router,private http:HttpClientModule,private corporate:CorporateregisterService){
}

corporateuserdata:any 

getcorporateuser(){

  this.corporate.getcorporateuser().subscribe((res: any) =>{
    this.corporateuserdata = res;
  });  
}

ngOnInit(): void {
  this.corporateuserdata();
}

}
