import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  maxDate = new Date();
  signUpForm = this.formBuilder.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    email: [null, [Validators.required, 
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      //      Example of valid email id
      //      mysite@ourearth.com
      //      my.ownsite@ourearth.org
      //      mysite@you.me.net
      //      Example of invalid email id
      //      mysite.ourearth.com [@ is not present]
      //      mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
      //      @you.me.net [ No character before @ ]
      //      mysite123@gmail.b [ ".b" is not a valid tld ]
      //      mysite@.org.org [ tld can not start with dot "." ]
      //      .mysite@mysite.org [ an email should not be start with "." ]
      //      mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
      //      mysite..1234@yahoo.com [double dots are not allowed]
    password: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*]{6,20}$/)]],
      //      Max 20 characters, minimum six characters
      //      atleast one letter, one number and one special character
    confirmPassword: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*]{6,20}$/)]],
    birthDate: new FormControl('', Validators.required),
    gender: null,
    mobileNumber: null,
  });
  
  constructor(private formBuilder : FormBuilder, public dialog : MatDialog) { }
  // get firstName() {
  //   return this.signUpForm.get('firstName')
  // }
  
  // get lastName() {
  //   return this.signUpForm.get('lastName')
  // }
  
  // get email() {
  //   return this.signUpForm.get('email')
  // }
  
  // get password() {
  //   return this.signUpForm.get('password')
  // }
  
  // get confirmPassword() {
  //   return this.signUpForm.get('confirmPassword')
  // }
  
  // get birthDate() {
  //   return this.signUpForm.get('birthDate')
  // }
  
  // get gender() {
  //   return this.signUpForm.get('gender')
  // }
  
  // get mobileNumber() {
  //   return this.signUpForm.get('mobileNumber')
  // }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if (this.signUpForm.valid)
    {
      console.log(this.signUpForm.value)
      const dialogRef = this.dialog.open(ConfirmationDialogComponent)
    }
    else
    {
      console.log("Passwords don't match");
    }
  }

  //restricts user to input numbers only
  keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }) {
    let charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  
}
