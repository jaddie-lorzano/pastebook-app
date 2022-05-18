import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  passwordForm = this.formBuilder.group({
    password: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*]{6,20}$/)]],
    confirmpassword: [null, [Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*]{6,20}$/)]],
    });

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  checkPassword() {
    // alert("going");
    if (this.passwordForm.get('password')?.value === this.passwordForm.get('confirmpassword')?.value) {
    alert ('Success');
  } else {
    alert ("Passwords don't match");
  }
}
}
