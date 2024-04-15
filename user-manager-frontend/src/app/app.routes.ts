import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
