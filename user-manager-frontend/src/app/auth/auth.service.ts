import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public authData = new BehaviorSubject({
    name: '',
    lastname: '',
    email: '',
    access_token: '',
  });
  public httpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    const authData = localStorage.getItem('auth_data');
    if (authData) this.authData.next(JSON.parse(authData));

    this.authData.subscribe({
      next: (value) => {
        this.httpHeaders = new HttpHeaders().set(
          'Authorization',
          'Bearer ' + this.authData.value.access_token
        );
      },
    });
  }

  login(loginForm: any) {
    return this.http
      .post(`${environment.backend_base_url}/users/auth`, loginForm)
      .subscribe({
        next: (result: any) => {
          localStorage.setItem('auth_data', JSON.stringify(result));
          this.authData.next(result);
          this.router.navigate(['/']);
        },
        error: (error) => {
          M.toast({ html: error.error.message });
        },
      });
  }

  isAuthenticated() {
    try {
      const isTokenValid = !this.jwtHelper.isTokenExpired(
        this.authData.value.access_token
      );
      if (isTokenValid) {
        return true;
      } else {
        this.router.navigate(['/', 'auth']);
        return false;
      }
    } catch (error) {
      this.router.navigate(['/', 'auth']);
      return false;
    }
  }
}
