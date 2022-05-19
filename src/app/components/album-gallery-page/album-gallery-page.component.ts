import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album.service';
import { CreateAlbumDialogComponent } from './create-album-dialog/create-album-dialog.component';

@Component({
  selector: 'app-album-gallery-page',
  templateUrl: './album-gallery-page.component.html',
  styleUrls: ['./album-gallery-page.component.scss']
})
export class AlbumGalleryPageComponent implements OnInit {

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
      .subscribe(albums => this.albums = albums)
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    console.log(imagePath);
    return imagePath;
  }
}
