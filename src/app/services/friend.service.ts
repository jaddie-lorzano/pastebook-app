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

    return this.http.get(`${this.baseUrl}friends?id=${id}`, {headers: header});
  }
}
