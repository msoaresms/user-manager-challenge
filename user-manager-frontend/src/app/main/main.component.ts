import { Component } from '@angular/core';
import * as M from 'materialize-css';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(public readonly authService: AuthService) {}

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  }
}
