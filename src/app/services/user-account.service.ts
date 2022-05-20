import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserAccount } from '../models/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  apiUrl = "https://localhost:44348/";

  constructor(private http: HttpClient) { }

  createAccount(body: FormData) {
    console.log(body);
    return this.http.post(`${this.apiUrl}user-accounts/create-user-account`, body);
  };
}
