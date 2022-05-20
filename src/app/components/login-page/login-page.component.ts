import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm = this.fb.group({
    email: [null, [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ]],
    password: [null, Validators.required]
  });
  isLoggedIn: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    if(this.isLoggedIn){
      this.router.navigate(['/']);
    }
  }

  onSubmit(data:any): void {
    this.authService.login(data.email, data.password).subscribe(response => {
      this.router.navigate(['/']);
    }, (err) => {
      alert("Log In Failed");
      //this.router.navigate(['/login']);
    });
  }
}
