import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlbumId, EditAlbum } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-edit-album-dialog',
  templateUrl: './edit-album-dialog.component.html',
  styleUrls: ['./edit-album-dialog.component.scss']
})
export class EditAlbumDialogComponent implements OnInit {

  albumId!: number;
  title: string ="";
  description: string | null = null
  requestBody!: EditAlbum;

  constructor(
    public dialogRef: MatDialogRef<EditAlbumDialogComponent>, 
    private albumService: AlbumService,
    @Inject(MAT_DIALOG_DATA) public data: AlbumId) { }

  ngOnInit(): void {
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    this.requestBody = {
      title : this.title,
      description : this.description
    };
    this.albumService.editAlbum(this.requestBody, this.data.id);
    this.dialogRef.close(true);
  }
}
