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
  confirmationCode = '123';

  constructor(router: Router,  private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    this.router = router;
    this.dialogRef = dialogRef;
   }


  ngOnInit(): void {
  }

  onSubmit():void {
    if (this.confirmationCode != this.inputCode)
    {
      alert('Code does not match!')
    }
    else
    {
      alert('Email confirmed!')
      this.router.navigate(['/']);
      this.dialogRef.close();
    }
  }
}