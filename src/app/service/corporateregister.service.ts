import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CorporateregisterService {

  constructor(private http:HttpClient) { }

  corporateSignUp(data:any){
    return this.http.post('http://localhost:3000/createcorporate',data)
  }


  getcorporateuser(){
    return this.http.get('http://localhost:3000/createcorporate');
  }
 

}


