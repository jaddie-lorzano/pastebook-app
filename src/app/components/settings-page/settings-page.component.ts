import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  accountSettingsForm = this.formBuilder.group({
    firstname: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    birthDate: new FormControl('', Validators.required),
    gender: null,
    mobileNumber: null,
  })

  firstName:string = 'Cardo';
  lastName:string = 'Dalisay';
  birthDate: any = '01/01/1990';
  gender:string = 'Male';
  mobileNumber: string = '096';
  firstNameInput: boolean = true;
  lastNameInput: boolean = true;
  birthDateInput: boolean = true;
  genderInput: boolean = true;
  numberInput: boolean = true;

  passwordForm = this.formBuilder.group({
    password: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()_-])[a-zA-Z0-9!@#$%^&*_-]{6,20}$/)]],
    confirmpassword: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()_-])[a-zA-Z0-9!@#$%^&*_-]{6,20}$/)]],
    });

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  toggleFirstName() {
    this.firstNameInput = false;
  }
  toggleLastName() {
    this.lastNameInput = false;
  }
  toggleBirthday() {
    this.birthDateInput = false;
  }
  toggleGender() {
    this.genderInput = false;
  }
  toggleNumber() {
    this.numberInput = false;
  }

  onClick() {
    if(this.firstName == null || this.lastName == null || this.birthDate == null)
    {

    }
  }

  checkPassword() {
    if (this.passwordForm.get('password')?.value === this.passwordForm.get('confirmpassword')?.value) {
    alert ('Your password has been changed');
    } else {
      alert ("Your password doesn't match");
    }
  }
  //need method() if old passwords match. Need call from backend

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
