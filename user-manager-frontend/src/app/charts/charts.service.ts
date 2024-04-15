import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChartsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  statusGeneral() {
    return this.http.get(
      `${environment.backend_base_url}/users/status-general`,
      {
        headers: this.authService.httpHeaders,
      }
    );
  }

  statusAdmin() {
    return this.http.get(`${environment.backend_base_url}/users/status-admin`, {
      headers: this.authService.httpHeaders,
    });
  }

  statusUser() {
    return this.http.get(`${environment.backend_base_url}/users/status-user`, {
      headers: this.authService.httpHeaders,
    });
  }

  statusByRole() {
    return this.http.get(
      `${environment.backend_base_url}/users/status-by-role`,
      {
        headers: this.authService.httpHeaders,
      }
    );
  }
}
