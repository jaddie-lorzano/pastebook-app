import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album.service';
import { CreateAlbumDialogComponent } from '../create-album-dialog/create-album-dialog.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  userAccountId = 111; // hard-coded for now
  albums: Album[] = [];
  constructor(private dialogRef:MatDialog, private albumService : AlbumService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  openDialog() {
    this.dialogRef.open(CreateAlbumDialogComponent).afterClosed().subscribe(response => {
      if(response == true) {
        this.getAlbums()
      }
    })
  }

  getAlbums(): void {
    this.albumService.getAlbums(this.userAccountId)
      .subscribe(album => this.albums = album)
  }
}
