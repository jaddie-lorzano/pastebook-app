import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FriendService } from 'src/app/services/friend.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-friends-list-page',
  templateUrl: './friends-list-page.component.html',
  styleUrls: ['./friends-list-page.component.scss']
})
export class FriendsListPageComponent implements OnInit {
  clearField: string = '';
  userAccountId!: number;
  friends: any;
  constructor(
    private friendService: FriendService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.friendService.getFriends(this.userAccountId).subscribe(response => {
      this.friends = response;
    });
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    return imagePath;
  }
}
