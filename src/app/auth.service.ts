import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  loginUser(emailId: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { emailId, password });
  }

  logout(): Observable<any> {
    localStorage.removeItem('token'); // Clear the token on logout
    // You might perform other cleanup tasks here if needed
    return this.http.post(`${this.apiUrl}/logout`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Check if the user has a valid token
  }

  getUserDetails(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/user-details`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
