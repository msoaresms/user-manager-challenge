import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public authData: any;

  constructor(private http: HttpClient) {}

  login(loginForm: any) {
    return this.http.post('http://localhost:3000/users/auth', loginForm);
  }
}
