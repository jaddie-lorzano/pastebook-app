import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

  baseUrl = "https://localhost:44348/";
  constructor(
    private http: HttpClient
  ) { }

  sendFriendRequest(requestReceiverId: number, requestSenderId:number): Observable<any> {

    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );

    const body =
    {
      "requestReceiverId": requestReceiverId,
      "requestSenderId": requestSenderId
    }

    return this.http.post(`${this.baseUrl}friends/friend-request`, body , {headers: header});
  }
  getAllFriendRequest(userId: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}friends/get-friend-request-by-userid?userId=${userId}`, {headers: header});
  }

  acceptFriendRequest(frId: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.post(`${this.baseUrl}friends/accept-friend-request?id=${frId}`, {headers: header});
  }

  declineFriendRequest(frId: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.delete(`${this.baseUrl}friends/decline-friend-request?id=${frId}`, {headers: header});
  }
}
