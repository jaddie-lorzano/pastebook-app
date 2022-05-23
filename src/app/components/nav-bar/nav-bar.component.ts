import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthService } from 'src/app/services/auth.service';
import { FriendRequestService } from 'src/app/services/friend-request.service';
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

  notification: any;
  notificationCount!: number;

  friendRequest: any;
  friendRequestCount!: number;

  constructor(
    private authService: AuthService,
    private userAccountService: UserAccountService,
    private router: Router,
    private notificationService: NotificationsService,
    private friendRequestService: FriendRequestService,
    private sanitizer: DomSanitizer) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }; 
  }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
      this.getAllNotification();
      this.getAllFriendRequest();
    });
  }

  getAllFriendRequest(){
    this.friendRequestService.getAllFriendRequest(this.userAccountId).subscribe(response => {
      this.friendRequest = response;
      this.friendRequestCount = Object.keys(this.friendRequest).length;
    })
  }

  getAllNotification(){
    this.notificationService.getAllNotification(this.userAccountId).subscribe(response => {
      this.notification = response;
      this.notificationCount = Object.keys(this.notification).length;
    })
  }

  logOut(): void{
    alert("Log out successful!");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    console.log(imagePath);
    return imagePath;
  }

  navigateToUserProfile(): void {              
  this.router.navigate(['/' + this.userAccount.userName]);
  }

  AcceptFR(frId: number){
    this.friendRequestService.acceptFriendRequest(frId).subscribe(response=>{
      alert("friend request accepted");
    }, (err)=>{
    })
  }

  DeclineFR(frId: number){
    this.friendRequestService.declineFriendRequest(frId).subscribe(response=>{
      alert("friend request declined");
    }, (err)=>{
    })
  }
}
