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

  constructor(private router: Router, private urlservice: NetworkcallService) {}

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onFinancialDocumentSelected(event: any) {
    this.selectedFinancialDocument = event.target.files[0];
  }

  submitData() {
    if (!this.selectedImage || !this.selectedFinancialDocument) {
      console.error('Image and Financial Document are required.');
      return;
    }

    const formData = new FormData();

    formData.append('entityName', String(this.clientReg.entityName || ''));
    formData.append('iecCode', String(this.clientReg.iecCode || ''));
    formData.append('userName', String(this.clientReg.userName || ''));
    formData.append('mobileNumber', String(this.clientReg.mobileNumber || ''));
    formData.append('emailId', String(this.clientReg.emailId || ''));
    formData.append('password', String(this.clientReg.password || ''));
    formData.append('beneficiary', String(this.clientReg.beneficiary || ''));
    formData.append('accuntNumber', String(this.clientReg.accuntNumber || ''));
    formData.append('swiftCode', String(this.clientReg.swiftCode || ''));

    formData.append('gstCertificate', this.selectedImage);
    formData.append('financialDocument', this.selectedFinancialDocument);

    // Uncomment the following lines when you want to make the API call
    this.urlservice.createCorporateRegi(formData).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/home/user']);
    });
  }
}
