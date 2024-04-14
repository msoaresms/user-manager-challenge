import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ChartsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  statusGeneral() {
    return this.http.get('http://localhost:3000/users/status-general', {
      headers: this.authService.httpHeaders,
    });
  }

  statusAdmin() {
    return this.http.get('http://localhost:3000/users/status-admin', {
      headers: this.authService.httpHeaders,
    });
  }

  statusUser() {
    return this.http.get('http://localhost:3000/users/status-user', {
      headers: this.authService.httpHeaders,
    });
  }

  statusByRole() {
    return this.http.get('http://localhost:3000/users/status-by-role', {
      headers: this.authService.httpHeaders,
    });
  }
}
