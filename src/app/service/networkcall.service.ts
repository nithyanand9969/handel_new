import { Injectable } from '@angular/core';
import { ClientRegisteration } from '../model/client-registeration';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../login/login-model';



@Injectable({
  providedIn: 'root'
})
export class NetworkcallService {

  userLogin: any;

  // private URLRegisteration="http://localhost:8080/client/registeration"

  // private baseUrl = 'http://localhost:8080/client/login';


  constructor(public httpclient: HttpClient) {

  }
  createCorporateRegi(clientRegi: ClientRegisteration): Observable<Object> {

    return this.httpclient.post('http://localhost:8081/auth/createUser', clientRegi)
  }

  createTraderRegi(TraderRigi: ClientRegisteration): Observable<Object> {

    return this.httpclient.post('http://localhost:8081/auth/createUser', TraderRigi);
  }

  getcorporateuser() {
    return this.httpclient.get('http://localhost:8080/client/getRegistrationList');
  }


  logincor(user: LoginModel): Observable<object> {

    console.log(user);

    return this.httpclient.post('http://localhost:8080/auth/login', user);
  }

}
