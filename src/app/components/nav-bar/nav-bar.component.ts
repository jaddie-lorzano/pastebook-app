import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from 'src/app/services/image.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userAccountId!: number;
  userAccount!: UserAccount;
  constructor(
    private authService: AuthService,
    private userAccountService: UserAccountService,
    private router: Router,
    private notificationService: NotificationsService,
    private imageService: ImageService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }; 
  }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
      this.getAllNotification();
    });
  }
  
  getAllNotification(){

  }

  logOut(): void{
    alert("Log out successful!");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getImagePath(base64string: string) {
    var imagePath = this.imageService.convertBase64TextString(base64string);
    return imagePath;
  }

  navigateToUserProfile(): void {              
  this.router.navigate(['/' + this.userAccount.userName]);
  }


}
