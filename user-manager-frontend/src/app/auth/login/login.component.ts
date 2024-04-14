import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (result) => {
          this.authService.authData = { ...result };
          this.router.navigate(['users', 'list']);
        },
        error: (error) => {
          M.toast({ html: error.error.message });
        },
      });
    }
  }
}
