import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/Album';
import { Image } from 'src/app/models/Image';
import { AlbumService } from 'src/app/services/album.service';
import { ImageService } from 'src/app/services/image.service';
import { EditAlbumDialogComponent } from '../edit-album-dialog/edit-album-dialog.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  userAccountId = 111; // hard-coded for now
  albumId!: number;
  album!: Album;
  images: Image[] = [];
  imageFile: any;
  imageFileName: string = "";

  constructor(
    private dialogRef:MatDialog, 
    private imageService : ImageService, 
    private albumService : AlbumService, 
    private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

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

  openDialog() {
    this.dialogRef.open(EditAlbumDialogComponent).afterClosed().subscribe(response => {
      if(response == true) {
        this.getParentAlbum()
      }
    });
  }

  uploadImage(): void {
    this.dialogRef.open(EditAlbumDialogComponent).afterClosed().subscribe(response => {
      if(response == true) {
        this.getImages();
      }
    });
  }

  async deleteAlbum() {
    this.albumService.deleteAlbum(this.albumId);
    await new Promise(resolve => setTimeout(resolve, 500))
    alert(`${this.album.title} delete successfully.`)
    this.router.navigate(["/albums"]);
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

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    return imagePath;
  }
}
