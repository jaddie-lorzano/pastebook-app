import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "https://localhost:44348/";
  constructor(
    private http: HttpClient
  ) { }

  getWallPosts(id: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}posts/get-posts-wall?id=${id}`, {headers: header});
  }

  getTimelinePosts(id: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}posts/get-posts-timeline?id=${id}`, {headers: header});
  }

  createNewPost(post: any): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.post(`${this.baseUrl}posts/new-post`, post, {headers: header});
  }
}
