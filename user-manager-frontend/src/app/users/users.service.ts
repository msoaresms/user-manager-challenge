import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  listUsers() {
    return this.http.get(`${environment.backend_base_url}/users`, {
      headers: this.authService.httpHeaders,
    });
  }

  addUser(userData: any) {
    return this.http.post(`${environment.backend_base_url}/users`, userData, {
      headers: this.authService.httpHeaders,
    });
  }

  editUser(userData: any, id: number) {
    return this.http.put(
      `${environment.backend_base_url}/users/${id}`,
      userData,
      {
        headers: this.authService.httpHeaders,
      }
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.backend_base_url}/users/${id}`, {
      headers: this.authService.httpHeaders,
    });
  }
}
