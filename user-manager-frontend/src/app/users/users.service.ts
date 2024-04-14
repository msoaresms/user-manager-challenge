import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  listUsers() {
    return this.http.get('http://localhost:3000/users', {
      headers: this.authService.httpHeaders,
    });
  }

  addUser(userData: any) {
    return this.http.post('http://localhost:3000/users', userData, {
      headers: this.authService.httpHeaders,
    });
  }

  editUser(userData: any, id: number) {
    return this.http.put(`http://localhost:3000/users/${id}`, userData, {
      headers: this.authService.httpHeaders,
    });
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`, {
      headers: this.authService.httpHeaders,
    });
  }
}
