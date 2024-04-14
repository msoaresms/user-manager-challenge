import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { usersResolver } from './users.resolver';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';

const USERS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListUsersComponent,
    resolve: { usersList: usersResolver },
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'list',
  // },
];

@NgModule({
  declarations: [ListUsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USERS_ROUTES),
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
