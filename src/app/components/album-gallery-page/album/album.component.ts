import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, EditAlbum } from 'src/app/models/Album';
import { Image } from 'src/app/models/Image';
import { UserAccount } from 'src/app/models/UserAccount';
import { AlbumService } from 'src/app/services/album.service';
import { ImageService } from 'src/app/services/image.service';
import { UserAccountService } from 'src/app/services/user-account.service';
import { EditAlbumDialogComponent } from '../edit-album-dialog/edit-album-dialog.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  userAccountId!: number;
  userAccount!: UserAccount;
  albumId!: number;
  album!: Album;
  images: Image[] = [];
  imageFile: any;
  imageFileName: string = "";
  title: string ="";
  description: string | null = null
  requestBody!: EditAlbum;
  editStatus: boolean = false;

  constructor(
    private dialogRef:MatDialog, 
    private imageService : ImageService, 
    private albumService : AlbumService,
    private userAccountService : UserAccountService, 
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
    this.userAccountService.getUserAccount(this.userAccountId).subscribe(response => {
      this.userAccount = response;
    });
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.getParentAlbum();
    this.getImages();
  }

  onFileSelect(event:any) {
    this.imageFile = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
  }

  async onFileUpload() {
    const formData = new FormData();
    formData.append('postedImage',this.imageFile)
    this.imageService.uploadImages(formData, this.albumId);
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.ref.detectChanges();
    this.imageFile = null;
    this.imageFileName = "";
    this.getImages();
  }

  editAlbumName() {
    const dialogRef = this.dialogRef.open(EditAlbumDialogComponent, {
      data: {id: this.albumId}
    });

    dialogRef.afterClosed().subscribe(response => {
      if(response == true){
        this.getParentAlbum();
      }
    });
  }

  async deleteAlbum() {
    this.albumService.deleteAlbum(this.albumId);
    await new Promise(resolve => setTimeout(resolve, 500))
    alert(`${this.album.title} delete successfully.`)
    this.router.navigate([`${this.userAccount.userName}/albums`]);
  }

  getImages(): void {
    this.imageService.getAlbumImages(this.albumId)
      .subscribe(images => {
        this.images = images;
      })
  }

  getParentAlbum(): void {
    this.albumService.getAlbum(this.albumId)
      .subscribe(album => this.album = album)
  }

  getImagePath(base64string: string) {
    var imagePath = this.imageService.convertBase64TextString(base64string);
    return imagePath;
  }

  checkAlbumTitle():boolean {
    if (this.album.title == "Timeline photos" || this.album.title == "Profile pictures" || this.album.title == "Cover photos"){
      return false;
    }
    else {
      return true;
    }
  }
}
