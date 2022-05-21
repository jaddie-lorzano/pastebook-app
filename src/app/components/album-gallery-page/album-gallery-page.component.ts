import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Album } from 'src/app/models/Album';
import { UserAccount } from 'src/app/models/UserAccount';
import { AlbumService } from 'src/app/services/album.service';
import { UserAccountService } from 'src/app/services/user-account.service';
import { CreateAlbumDialogComponent } from './create-album-dialog/create-album-dialog.component';

@Component({
  selector: 'app-album-gallery-page',
  templateUrl: './album-gallery-page.component.html',
  styleUrls: ['./album-gallery-page.component.scss']
})
export class AlbumGalleryPageComponent implements OnInit {
  // userAccountId = Number(localStorage.getItem('userId')!); // hard-coded for now
  userAccountId!: number;
  userAccount!: UserAccount;
  albums: Album[] = [];
  constructor(
    private dialogRef:MatDialog, 
    private albumService: AlbumService, 
    private userAccountService: UserAccountService, 
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response
    })
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
      console.log(this.albums)
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    return imagePath;
  }


}
