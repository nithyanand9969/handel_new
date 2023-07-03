import { Component } from '@angular/core';
import { CorporateregisterService } from '../service/corporateregister.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-corporateregister',
  templateUrl: './corporateregister.component.html',
  styleUrls: ['./corporateregister.component.scss']
})
export class CorporateregisterComponent {

constructor(private corporate:CorporateregisterService , private router:Router){}

  name:String =""
  file:any;

  getName(name:String){

    this.name = name;
  }
  getFile(event:any){

    this.file = event.target.files[0];
  }

  Create(data:object):void{
   this.corporate.corporateSignUp(data).subscribe((result)=>{
   if(result){
    this.router.navigate(['/home/user']);
   }
    

   });

  }


}
