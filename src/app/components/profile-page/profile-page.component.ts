import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleWhoLikedComponent } from './people-who-liked/people-who-liked.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  aboutMe = '';
  aboutMeSaved = '';

openDialog() {
  const dialogRef = this.dialog.open(PeopleWhoLikedComponent);
}

  ngOnInit(): void {
  }

  addToAboutMe(event: Event, aboutMe: String) {
    this.aboutMeSaved = this.aboutMe;
    this.aboutMe = '';
  }
}