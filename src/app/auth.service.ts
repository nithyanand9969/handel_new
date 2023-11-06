import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password });
  }

  logout() {
    localStorage.removeItem('token'); // Clear the token on logout
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Check if the user has a valid token
  }
}