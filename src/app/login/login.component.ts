import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  registerForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)]), //min length 8 characters
    
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ])
  });

    get email() {
      return this.registerForm.get('email')
    };

    get password() {
      return this.registerForm.get('password')
    };
  }