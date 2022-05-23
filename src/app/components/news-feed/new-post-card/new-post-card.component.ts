import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAccount } from 'src/app/models/UserAccount';
import { ImageService } from 'src/app/services/image.service';
import { UserAccountService } from 'src/app/services/user-account.service';
import { NewPostDialogComponent } from './new-post-dialog/new-post-dialog.component';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.scss']
})
export class NewPostCardComponent implements OnInit {

  userAccountId!: number;
  userAccount!: UserAccount;

  constructor(
    public dialog: MatDialog,
    private userAccountService: UserAccountService,
    private imageService: ImageService) {}

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
    });
  }
  
  openCreatePost(): void {
    const dialogRef = this.dialog.open(NewPostDialogComponent, {
      width: '480px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getImagePath(base64string: string) {
    var imagePath = this.imageService.convertBase64TextString(base64string);
    return imagePath;
  }

}