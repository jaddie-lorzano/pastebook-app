import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CreateAlbumDialogComponent } from '../album/create-album-dialog/create-album-dialog.component';

@Component({
  selector: 'app-album-gallery',
  templateUrl: './album-gallery.component.html',
  styleUrls: ['./album-gallery.component.scss']
})
export class AlbumGalleryComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }

  openDialog() {
    this.dialogRef.open(CreateAlbumDialogComponent);
  }

  ngOnInit(): void {
  }

}
