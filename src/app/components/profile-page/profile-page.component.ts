import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendRequestService } from 'src/app/services/friend-request.service';
import { UserAccountService } from 'src/app/services/user-account.service';
import { PeopleWhoLikedComponent } from './people-who-liked/people-who-liked.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  
  username: string = '';
  loggedInId: number = 0;
  userDetails: any = null;
  aboutMe = '';
  aboutMeSaved = '';

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private userAccountSerive: UserAccountService,
    private friendRequestService: FriendRequestService) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.loggedInId = Number(localStorage.getItem('userId'));
    this.userAccountSerive.getAccountByUsername(this.username).subscribe(response => {
      this.userDetails = response;
      console.log(this.userDetails.id == this.loggedInId);
    }, (err) => {
      console.log(err.message);
      this.router.navigate(['/' + this.username]);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(PeopleWhoLikedComponent);
  }
  addToAboutMe(event: Event, aboutMe: String) {
    this.aboutMeSaved = this.aboutMe;
    this.aboutMe = '';
  }

  checkIfProfile(){
    return this.userDetails.id == this.loggedInId;
  }

  checkIfFriend(){
    return true;
  }

  sendFriendRequest() {
      this.friendRequestService.sendFriendRequest(this.userDetails.id, this.loggedInId).subscribe(response => {
        //this.router.navigate(['/']);
        alert("Friend Request Success");
      }, (err) => {
        alert("Send Fail");
        //this.router.navigate(['/login']);
      });
  }
}
