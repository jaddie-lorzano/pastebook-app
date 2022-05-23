import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  baseUrl = "https://localhost:44348/";
  constructor(
    private http: HttpClient
  ) { }

  getFriends(id: number): Observable<any> {

    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}friends/get-friends?id=${id}`, {headers: header});
  }

  checkIfFriend(userId: number, friendId: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}friends/check-if-friend?userId=${userId}&friendId=${friendId}`, {headers: header});
  }

  unfriendUser(userId: number, friendId: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.delete(`${this.baseUrl}friends/delete-friend?userAccountId=${userId}&friendAccountId=${friendId}`, {headers: header});
  }
}
