import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ChartsService } from './charts.service';

export const statusGeneralResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  const chartsService = inject(ChartsService);
  return chartsService.statusGeneral();
};

export const statusAdminResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  const chartsService = inject(ChartsService);
  return chartsService.statusAdmin();
};

export const statusUserResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  const chartsService = inject(ChartsService);
  return chartsService.statusUser();
};

export const statusByRole: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  const chartsService = inject(ChartsService);
  return chartsService.statusByRole();
};
