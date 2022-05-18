import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album.service';
import { CreateAlbumDialogComponent } from './create-album-dialog/create-album-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  userAccountId = 111; // hard-coded for now
  albums: Album[] = [];
  constructor(private dialogRef:MatDialog, private albumService : AlbumService, private sanitizer: DomSanitizer) { }

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

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    return imagePath;
  }
}
