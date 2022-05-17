import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAlbumDialogComponent } from './create-album-dialog/create-album-dialog.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }

  openDialog() {
    this.dialogRef.open(CreateAlbumDialogComponent);
  }

  ngOnInit(): void {
  }
}
