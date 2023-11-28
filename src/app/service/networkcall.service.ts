import { Injectable } from '@angular/core';
import { ClientRegisteration } from '../model/client-registeration';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../login/login-model';



@Injectable({
  providedIn: 'root'
})
export class NetworkcallService {
  getTotalUsers() {
    throw new Error('Method not implemented.');
  }


  constructor(public httpclient: HttpClient) {

  }
  createCorporateRegi(formData: FormData): Observable<Object> {

    return this.httpclient.post('http://localhost:8080/auth/uploadFileAndUser', formData);
  }
  createTraderRegi(TraderRigi: ClientRegisteration): Observable<Object> {

    return this.httpclient.post('http://localhost:8081/auth/createUser', TraderRigi);
  }

 
  getcorporateuser(): Observable<any[]> {
    return this.httpclient.get<any[]>('http://localhost:8080/home/user');
  }


  loginUser(user: LoginModel): Observable<any> {
    return this.httpclient.post('http://localhost:8080/auth/login', user);
  }

}
