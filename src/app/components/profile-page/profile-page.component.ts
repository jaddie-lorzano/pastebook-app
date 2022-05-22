import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAccount } from 'src/app/models/UserAccount';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendRequestService } from 'src/app/services/friend-request.service';
import { UserAccountService } from 'src/app/services/user-account.service';
import { PeopleWhoLikedComponent } from './people-who-liked/people-who-liked.component';
import { UploadImageDialogComponent } from './upload-image-dialog/upload-image-dialog.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute, // from Joe Branch
    private router: Router, // from Joe Branch
    private userAccountService: UserAccountService,
    private friendRequestService: FriendRequestService, // from Joe Branch
    private sanitizer: DomSanitizer) {}

  userAccountId!: number;
  userAccount!: UserAccount;

  username!: string; // from Joe Branch
  //loggedInId!: number; // from Joe Branch
  //userDetails: any; // from Joe Branch

  aboutMe = '';
  aboutMeSaved = '';

  // ngOnInit(): void {
  //   this.userAccountId = Number(localStorage.getItem('userId')!);
  //   this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
  //     this.userAccount = response;
  //   });
  // }
  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.userAccountId = Number(localStorage.getItem('userId'));
    this.userAccountService.getAccountByUsername(this.username).subscribe(response => {
      this.userAccount = response;
      console.log(this.userAccount.id == this.userAccountId);
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
    return this.userAccount.id == this.userAccountId;
  }

  checkIfFriend(){
    return true;
  }

  openUploadProfileImageDialog() {
    const dialogRef = this.dialog.open(UploadImageDialogComponent).afterClosed().subscribe(response => {
      if(response == true){
        this.ngOnInit();
      }
    });
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    console.log(imagePath);
    return imagePath;
  }

  sendFriendRequest() {
      this.friendRequestService.sendFriendRequest(this.userAccount.id, this.userAccountId).subscribe(response => {
        //this.router.navigate(['/']);
        alert("Friend Request Success");
      }, (err) => {
        alert("Send Fail");
        //this.router.navigate(['/login']);
      });
  }
}
