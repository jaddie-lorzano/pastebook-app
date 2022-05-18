import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-post-dialog',
  templateUrl: './new-post-dialog.component.html',
  styleUrls: ['./new-post-dialog.component.scss']
})
export class NewPostDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewPostDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
