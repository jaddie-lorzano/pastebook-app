import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userAccountId!: number;
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
  }

  logOut(): void{
    alert("Log out successful!");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
