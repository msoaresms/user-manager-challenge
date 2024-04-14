import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  constructor(private readonly userService: UserService) {}

  public readonly addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
    isAdmin: new FormControl(false, []),
    role: new FormControl('', []),
  });

  public addNewUser() {
    if (this.addUserForm.valid) {
      const data = this.addUserForm.value;
      data.role = data.isAdmin == true ? 'ADMIN' : 'USER';

      this.userService.addUser(data).subscribe({
        next: (result) => {
          M.toast({ html: 'Usuário adicionado com sucesso' });
          this.addUserForm.reset();
        },
        error: (error) => {
          M.toast({ html: error.error.message });
        },
      });
    }
  }
}
