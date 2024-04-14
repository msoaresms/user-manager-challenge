import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent {
  public users: any[] = [];
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private editModalInstance: any;
  private deleteModalInstance: any;
  public readonly editUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    isAdmin: new FormControl(false, []),
    role: new FormControl('', []),
  });
  private actionIndex = 0;

  constructor(private readonly userService: UserService) {
    this.users = this.route.snapshot.data['usersList'];
  }

  ngAfterViewInit(): void {
    const editModalElem = document.querySelectorAll('#editModal');
    this.editModalInstance = M.Modal.init(editModalElem, {})[0];

    const deleteModalElem = document.querySelectorAll('#deleteModal');
    this.deleteModalInstance = M.Modal.init(deleteModalElem, {})[0];
  }

  public openEditUser(index: number) {
    this.actionIndex = index;
    const userData = {
      ...this.users[index],
      isAdmin: this.users[index].role == 'ADMIN' ? true : false,
    };
    this.editUserForm.patchValue(userData);
    this.editModalInstance.open();
  }

  public editUser() {
    const data = this.editUserForm.value;
    data.role = data.isAdmin == true ? 'ADMIN' : 'USER';
    this.userService.editUser(data, this.users[this.actionIndex].id).subscribe({
      next: (result) => {
        this.users[this.actionIndex] = result;
        M.toast({ html: 'Usuário alterado com sucesso' });
        this.editModalInstance.close();
        this.editUserForm.reset();
      },
      error: (error) => {
        M.toast({ html: error.error.message });
      },
    });
  }

  public openDeleteUser(index: number) {
    this.actionIndex = index;
    this.deleteModalInstance.open();
  }

  public deleteUser() {
    const data = this.users[this.actionIndex];
    this.userService.deleteUser(data.id).subscribe({
      next: (result) => {
        this.users.splice(this.actionIndex, 1);
        M.toast({ html: 'Usuário deletado com sucesso' });
        this.deleteModalInstance.close();
      },
      error: (error) => {
        M.toast({ html: error.error.message });
      },
    });
  }
}
