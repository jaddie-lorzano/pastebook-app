import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  baseUrl = "https://localhost:44348/";
  constructor(
    private http: HttpClient
  ) { }
  
  likePost(body: any): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.post(`${this.baseUrl}likes/new-like`,body, {headers: header});
  }

  checkLikeStatus(postId: number, userId: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}likes/check-like-status?postId=${postId}&userId=${userId}`, {headers: header});
    
  }

  getAllLikesByUserId(userId: number){
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}likes/get-likes-by-useraccountid?id=${userId}`, {headers: header});
  }

  getAllLikesByPostId(postId: number){
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}likes/get-likes?id=${postId}`, {headers: header});
  }
}
