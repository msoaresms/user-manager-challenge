import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const MAIN_ROUTES: Routes = [
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
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
})
export class MainModule {}
