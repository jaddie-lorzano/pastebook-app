import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAccount } from 'src/app/models/UserAccount';
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
    private userAccountService: UserAccountService,
    private sanitizer: DomSanitizer) {}

  userAccountId!: number;
  userAccount!: UserAccount;
  aboutMe = '';
  aboutMeSaved = '';

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
    });
  }

  addToAboutMe(event: Event, aboutMe: string) {
    this.aboutMeSaved = aboutMe;
    this.aboutMe = '';
  }

  openDialog() {
    const dialogRef = this.dialog.open(PeopleWhoLikedComponent);
  }

  openUploadProfileImageDialog() {
    const dialogRef = this.dialog.open(UploadImageDialogComponent).afterClosed().subscribe(response => {
      if(response == true){
        window.location.reload();
      }
    });
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    console.log(imagePath);
    return imagePath;
  }
}
