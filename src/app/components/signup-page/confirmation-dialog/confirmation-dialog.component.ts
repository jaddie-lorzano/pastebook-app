import { Component, OnInit } from '@angular/core';
import { matDialogAnimations, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  router: Router;
  inputCode = '';

  constructor(router: Router,  private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    this.router = router;
    this.dialogRef = dialogRef;
   }


  ngOnInit(): void {
  }

  onSubmit():void {
    alert('Email confirmed!')
      this.router.navigate(['/']);
      this.dialogRef.close();
  }
}