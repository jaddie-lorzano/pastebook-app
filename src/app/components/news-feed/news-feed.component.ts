import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  isLoggedIn: boolean = false;
  helper = new JwtHelperService();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
    const token = localStorage.getItem("pastebook_auth")!;
    if (this.helper.isTokenExpired(token)) {
      alert("3 Days Log In Limit Reached");
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    if(!this.isLoggedIn){
      this.router.navigate(['/login']);
    }
  }

}
