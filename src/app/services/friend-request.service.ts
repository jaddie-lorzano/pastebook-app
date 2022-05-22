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

  
}
