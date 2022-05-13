import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor() { }

  maxDate = new Date();
  signUpForm = new FormGroup({
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
    gender: new FormControl(''),
    number: new FormControl('')
  });

  get firstName() {
    return this.signUpForm.get('firstname')
  }
  
  get lastName() {
    return this.signUpForm.get('lastname')
  }
  
  get email() {
    return this.signUpForm.get('email')
  }
  
  get password() {
    return this.signUpForm.get('password')
  }
  
  get confirmPassword() {
    return this.signUpForm.get('confirmpassword')
  }
  
  get birthday() {
    return this.signUpForm.get('birthday')
  }
  
  get gender() {
    return this.signUpForm.get('gender')
  }
  
  get mobileNumber() {
    return this.signUpForm.get('mobileNumber')
  }

  onSubmit() {
    if (this.signUpForm.get('password')?.value === this.signUpForm.get('confirmpassword')?.value)
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
