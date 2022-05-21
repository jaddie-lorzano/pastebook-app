import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-upload-image-dialog',
  templateUrl: './upload-image-dialog.component.html',
  styleUrls: ['./upload-image-dialog.component.scss']
})
export class UploadImageDialogComponent implements OnInit {

  userAccountId!: number;
  imageFile: any;
  imageFileName: string = "";
  uploadProgress: number = 0;
  uploadStatus: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UploadImageDialogComponent>, 
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.userAccountId = Number(localStorage.getItem('userId')!);
  }

  onFileSelect(event:any) {
    this.imageFile = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
  }

  async onFileUpload() {
    this.uploadStatus = true;
    const formData = new FormData();
    formData.append('profileImage',this.imageFile)
    this.imageService.uploadProfileImages(formData, this.userAccountId).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total!);
      }
      if (event.type === HttpEventType.Response) {
        this.uploadStatus = false;
        this.dialogRef.close(true);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
