import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './custom-state-matcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pastebook-app';
}
