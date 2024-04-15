import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {
  statusAdminResolver,
  statusByRole,
  statusGeneralResolver,
  statusUserResolver,
} from './charts.resolver';

const CHARTS_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      statusGeneral: statusGeneralResolver,
      statusAdmin: statusAdminResolver,
      statusUser: statusUserResolver,
      statusByRole: statusByRole,
    },
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [DashboardComponent, PieChartComponent],
  imports: [CommonModule, RouterModule.forChild(CHARTS_ROUTES)],
})
export class ChartsModule {}
