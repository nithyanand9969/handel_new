import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClientRegisteration } from '../model/client-registeration';
import { NetworkcallService } from '../service/networkcall.service';



@Component({
  selector: 'app-corporateregister',
  templateUrl: './corporateregister.component.html',
  styleUrls: ['./corporateregister.component.scss']
})
export class CorporateregisterComponent {


  selectedImage: File | undefined;
  selectedFinancialDocument: File | undefined;
  
  clientReg: ClientRegisteration = new ClientRegisteration();

  constructor(public router: Router, public urlservice: NetworkcallService) { }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];

  }
  onFinancialDocumentSelected(event:any){
    this.selectedImage = event.target.files[0];
  }


  submitData() {
    if (!this.selectedImage || !this.selectedFinancialDocument) {
      console.error('Image and Financial Document are required.');
      return;
    }

    const clientRegi = new FormData();

    clientRegi.append('entityName', this.clientReg?.entityName?.toString() ?? '');
    clientRegi.append('iecCode', this.clientReg?.iecCode?.toString() ?? '');
    clientRegi.append('userName', this.clientReg?.userName?.toString() ?? '');
    clientRegi.append('mobileNumber', this.clientReg?.mobileNumber?.toString() ?? '');
    clientRegi.append('emailId', this.clientReg?.emailId?.toString() ?? '');
    clientRegi.append('password', this.clientReg?.password?.toString() ?? '');
    clientRegi.append('beneficiary', this.clientReg?.beneficiary?.toString() ?? '');
    clientRegi.append('accuntNumber', this.clientReg?.accuntNumber?.toString() ?? '');
    clientRegi.append('swiftCode', this.clientReg?.swiftCode?.toString() ?? '');
  
  // Cast to string
  clientRegi.append('gstCertificate', this.selectedImage as Blob);
  clientRegi.append('financialDocument', this.selectedFinancialDocument as Blob);

  
    // this.urlservice.createCorporateRegi(clientRegi).subscribe((res) => {
    //   console.log(res);
    //   this.router.navigate(['/home/user']);
    // });
  }
}


  // corportateRegisterationModel: Corporateregister = new Corporateregister();


  // Create(registration:object):void{
  //  this.corporate.corporateSignUp(registration).subscribe((result)=>{
  //  if(result){
  //   this.router.navigate(['/home/user']);
  //   alert(JSON.stringify(result));
  //    }
  //   else
  //    {
  //   this.router.navigate(['/login'])
  //   }

  //  });


  // }

  // submitData() {

  //   this.urlservice.createCorporateRegi(this.clientReg).subscribe((res) => {
  //     console.log(res);
  //     this.router.navigate(['/home/user']);

  //   });


  // }



