import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent {
  public users: any[] = [];
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.users = this.route.snapshot.data['usersList'];
  }
}
