import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  baseUrl = "https://localhost:44348/";

  constructor(
    private http: HttpClient
  ) { }

  getAccountByUsername(userName: string): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}user-accounts/get-user-account-by-username?userName=${userName}`, {headers: header});
  }
}
