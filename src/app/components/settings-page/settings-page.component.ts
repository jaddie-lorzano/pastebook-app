import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  firstName:string = 'Cardo';
  lastName:string = 'Dalisay';
  birthday: any = '01/01/1990';
  gender:string = 'Male';
  mobileNumber: string = '096';
  toggle: boolean = true;

  passwordForm = this.formBuilder.group({
    password: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()_-])[a-zA-Z0-9!@#$%^&*_-]{6,20}$/)]],
    confirmpassword: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()_-])[a-zA-Z0-9!@#$%^&*_-]{6,20}$/)]],
    });

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  toggleInput() {
    this.toggle = false;
  }

  onClick() {
    //save the variables to backend
  }

  checkPassword() {
    if (this.passwordForm.get('password')?.value === this.passwordForm.get('confirmpassword')?.value) {
    alert ('Your password has been changed');
  } else {
    alert ("Your password doesn't match");
  }

  //need method() if old passwords match. Need call from backend
}
}
