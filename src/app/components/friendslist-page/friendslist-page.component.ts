import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendslist-page',
  templateUrl: './friendslist-page.component.html',
  styleUrls: ['./friendslist-page.component.scss']
})
export class FriendslistPageComponent implements OnInit {

  clearField='';
  friendName='Abdul Kharakarakha';
  friendDescription='Age:68';

  constructor() { }

  ngOnInit(): void {
  }
}
