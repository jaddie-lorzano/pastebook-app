import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockedAccountService {

  baseUrl = "https://localhost:44348/";

  constructor(
    private http: HttpClient
  ) { }

  blockUser(blockerAccountId: number, blockedAccount: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.post(`${this.baseUrl}blocked-accounts/block-account?blockerAccount=${blockerAccountId}&blockedAccount=${blockedAccount}`, {headers: header});
  }

  checkIfBlocked(blockerId: number, blockedId: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}blocked-accounts/check-if-blocked?blockerId=${blockerId}&blockedId=${blockedId}`, {headers: header});
  }

  unblockUser(blockId: number):Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.delete(`${this.baseUrl}blocked-accounts/unblock-account?id=${blockId}`, {headers: header});
  }
}
