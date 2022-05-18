import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list-page',
  templateUrl: './friends-list-page.component.html',
  styleUrls: ['./friends-list-page.component.scss']
})
export class FriendsListPageComponent implements OnInit {

  clearField='';
  friendName='Abdul Kharakarakha';
  friendDescription='Age:68';

  constructor() { }

  ngOnInit(): void {
  }
}
