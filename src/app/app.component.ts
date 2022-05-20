import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './custom-state-matcher';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pastebook-app';

  constructor(public authService: AuthService) {}

}
