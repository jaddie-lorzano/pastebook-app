import { Component, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateAlbum,Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-create-album-dialog',
  templateUrl: './create-album-dialog.component.html',
  styleUrls: ['./create-album-dialog.component.scss']
})
export class CreateAlbumDialogComponent implements OnInit {

  userAccountId!: number;
  title: string ="";
  description: string | null = null
  requestBody!: CreateAlbum;

  constructor(public dialogRef: MatDialogRef<CreateAlbumDialogComponent>, private albumService : AlbumService) { }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.requestBody = {
      userAccountId : this.userAccountId,
      title : this.title,
      description : this.description
    };
    console.log(this.requestBody);
    this.albumService.createAlbum(this.requestBody);
    this.dialogRef.close(true);
  }
}
