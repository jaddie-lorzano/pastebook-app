import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAccount } from 'src/app/models/UserAccount';
import { UserAccountService } from 'src/app/services/user-account.service';
import { LikesComponent } from './likes/likes.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  userAccountId!: number;
  userAccount!: UserAccount;

  constructor(
    public dialog: MatDialog,
    private userAccountService: UserAccountService,
    private sanitizer: DomSanitizer) { }

  openDialog() {
    this.dialog.open(LikesComponent, );
  }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
    });
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    return imagePath;
  }
}
