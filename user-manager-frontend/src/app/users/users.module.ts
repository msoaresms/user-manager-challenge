import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { usersResolve } from './resolves/all-users.resolve';

const USERS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListUsersComponent,
    resolve: { usersList: usersResolve },
  },
  // {
  //   path: '**',
  //   redirectTo: 'list',
  // },
];

@NgModule({
  declarations: [ListUsersComponent],
  imports: [CommonModule, RouterModule.forChild(USERS_ROUTES)],
})
export class UsersModule {}
