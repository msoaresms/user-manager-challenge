import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChartsService {
  constructor(private http: HttpClient) {}

  statusGeneral() {
    return this.http.get('http://localhost:3000/users/status-general');
  }

  statusAdmin() {
    return this.http.get('http://localhost:3000/users/status-admin');
  }

  statusUser() {
    return this.http.get('http://localhost:3000/users/status-user');
  }

  statusByRole() {
    return this.http.get('http://localhost:3000/users/status-by-role');
  }
}
