import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserAccountService } from 'src/app/services/user-account.service';
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
  },
  // {
  //   Validators: this.MustMatch('password', 'confirmPassword')
  // }
  );
  
  constructor(
    private formBuilder : FormBuilder, 
    public dialog : MatDialog, 
    private userAccountService : UserAccountService,
    private datePipe : DatePipe
    ) { }

  get firstName() {
    return this.signUpForm.get('firstName')
  }
  
  get lastName() {
    return this.signUpForm.get('lastName')
  }
  
  get email() {
    return this.signUpForm.get('email')
  }
  
  get password() {
    return this.signUpForm.get('password')
  }
  
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')
  }
  
  get birthDate() {
    return this.signUpForm.get('birthDate')
  }
  
  get gender() {
    return this.signUpForm.get('gender')
  }
  
  get mobileNumber() {
    return this.signUpForm.get('mobileNumber')
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // MustMatch(controlName: string, matchingControlName: string) {
  //   return(formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //     if(matchingControl.errors && !matchingControl.errors.MustMatch){
  //       return 
  //     }
  //   }                                                                                                                                                                                           
  // }

  onSubmit(): void {
    const formData = new FormData();
    let birthDate = this.datePipe.transform(this.birthDate?.value, 'yyyy-MM-dd') ?? '';

    formData.append('FirstName', this.firstName?.value);
    formData.append('LastName', this.lastName?.value);
    formData.append('EmailAddress', this.email?.value);
    formData.append('Password', this.password?.value);
    formData.append('Birthday', birthDate);
    formData.append('Gender', this.gender?.value ?? '');
    formData.append('MobileNumber', this.mobileNumber?.value ?? '');

    this.userAccountService.createAccount(formData).subscribe(response => {
      console.log(response);
      if (response == true)
      {
        console.log(this.signUpForm.value)
        const dialogRef = this.dialog.open(ConfirmationDialogComponent)
      }
    });
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
