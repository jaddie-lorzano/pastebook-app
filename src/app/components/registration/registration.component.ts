import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor() { }

  maxDate = new Date();
  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),

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

    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*]{6,20}$/)
    ]),
//      Max 20 characters, minimum six characters
//      atleast one letter, one number and one special character
    
    confirmpassword: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
  });

  get firstName() {
    return this.registerForm.get('firstname')
  }
  
  get lastName() {
    return this.registerForm.get('lastname')
  }
  
  get email() {
    return this.registerForm.get('email')
  }
  
  get password() {
    return this.registerForm.get('password')
  }
  
  get confirmPassword() {
    return this.registerForm.get('confirmpassword')
  }
  
  get birthday() {
    return this.registerForm.get('birthday')
  }
  
  get gender() {
    return this.registerForm.get('gender')
  }
  
  get number() {
    return this.registerForm.get('number')
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