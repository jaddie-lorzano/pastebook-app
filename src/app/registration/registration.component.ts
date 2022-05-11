import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor() { }

  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ]),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
  });

  get firstName() {
    return this.registerForm.get('firstname');
  }
  
  get lastName() {
    return this.registerForm.get('lastname');
  }
  
  get email() {
    return this.registerForm.get('email');
  }
  
  get password() {
    return this.registerForm.get('password');
  }
  
  get confirmPassword() {
    return this.registerForm.get('confirmpassword');
  }
  
  get birthday() {
    return this.registerForm.get('birthday');
  }
  
  get gender() {
    return this.registerForm.get('gender');
  }
  
  get number() {
    return this.registerForm.get('number');
  }

  onSubmit() {
    if (this.registerForm.get('password')?.value === this.registerForm.get('confirmpassword')?.value)
    {
      alert ('Success');
    }
    else
    {
      alert ("Passwords don't match");
    }
  
//add validation for birthday, birthday should not be later than today.
//add validation for number, include country code

  }
}