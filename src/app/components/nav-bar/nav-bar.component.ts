import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userName = "joesalido101"; //hardcoded for now

  constructor(
    private authService: AuthService,
    private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
    }

  ngOnInit(): void {
  }

  logOut(): void{
    alert("Log out successful!");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToUserProfile(): void {
    this.router.navigate(['/' + this.userName]);
  }
}
