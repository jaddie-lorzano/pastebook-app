import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LikesComponent } from './likes/likes.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(LikesComponent, );
  }

  ngOnInit(): void {
  }

}
