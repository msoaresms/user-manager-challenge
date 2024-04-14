import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UsersModule } from '../users/users.module';
import { ChartsModule } from '../charts/charts.module';

const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('../charts/charts.module').then((m) => m.ChartsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MAIN_ROUTES),
    UsersModule,
    ChartsModule,
  ],
})
export class MainModule {}
