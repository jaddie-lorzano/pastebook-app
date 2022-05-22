import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friends-list-page',
  templateUrl: './friends-list-page.component.html',
  styleUrls: ['./friends-list-page.component.scss']
})
export class FriendsListPageComponent implements OnInit {

  id = 1;
  clearField='';
  friendName='Abdul Kharakarakha';
  friendDescription='Age:68';
  friends: any;
  constructor(
    private friendService: FriendService
  ) { }

  ngOnInit(): void {
    this.friendService.getFriends(this.id).subscribe(response => {
      this.friends = response;
    });
  } 
}
