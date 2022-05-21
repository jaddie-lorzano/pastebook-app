import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
  baseUrl = "https://localhost:44348/";

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();
  constructor(private http: HttpClient) {
      const token = localStorage.getItem('pastebook_auth');
      this._isLoggedIn.next(!!token);
  }

    login(email: string, password: string): Observable<Object> {
      //return this.http.post(`${this.baseUrl}UserAccount/LogIn?email=${email}&password=${password}`, {email,password});
      return this.http.post(`${this.baseUrl}user-accounts/login-user-account`, {email, password}).pipe(
        tap((response: any) => {
          localStorage.setItem('pastebook_auth', response.token);
          localStorage.setItem('email', response.email);
          localStorage.setItem('userId', response.id);
          this._isLoggedIn.next(true);
        }
        )
      );
    }

    logout(){
        localStorage.clear();
        this._isLoggedIn.next(false);
    }
}