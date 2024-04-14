import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  public statusGeneral: any[] = [];
  public statusAdmin: any[] = [];
  public statusUser: any[] = [];
  public statusByRole: any[] = [];

  constructor() {
    const statusGeneralAux = this.route.snapshot.data['statusGeneral'];
    this.statusGeneral = [
      {
        status: `Ativos: ${statusGeneralAux.activeUsers}`,
        number: statusGeneralAux.activeUsers,
      },
      {
        status: `Inativos: ${statusGeneralAux.inactiveUsers}`,
        number: statusGeneralAux.inactiveUsers,
      },
    ];

    const statusAdminAux = this.route.snapshot.data['statusAdmin'];
    this.statusAdmin = [
      {
        status: `Ativos: ${statusAdminAux.activeAdminUsers}`,
        number: statusAdminAux.activeAdminUsers,
      },
      {
        status: `Inativos: ${statusAdminAux.inactiveAdminUsers}`,
        number: statusAdminAux.inactiveAdminUsers,
      },
    ];

    const statusUserAux = this.route.snapshot.data['statusUser'];
    this.statusUser = [
      {
        status: `Ativos: ${statusUserAux.activeUsers}`,
        number: statusUserAux.activeUsers,
      },
      {
        status: `Inativos: ${statusUserAux.inactiveUsers}`,
        number: statusUserAux.inactiveUsers,
      },
    ];

    const statusByRoleAux = this.route.snapshot.data['statusByRole'];
    this.statusByRole = [
      {
        status: `Não admins ativos: ${statusByRoleAux.activeUsers}`,
        number: statusByRoleAux.activeUsers,
      },
      {
        status: `Não admins inativos: ${statusByRoleAux.inactiveUsers}`,
        number: statusByRoleAux.inactiveUsers,
      },
      {
        status: `Admins ativos: ${statusByRoleAux.activeAdmins}`,
        number: statusByRoleAux.activeAdmins,
      },
      {
        status: `Admins inativos: ${statusByRoleAux.inactiveAdmins}`,
        number: statusByRoleAux.inactiveAdmins,
      },
    ];
  }
}
