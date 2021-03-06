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

  getWallPosts(id: number, pageNumber: number, itemsPerScroll: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}infinite-scroll/get-posts-wall?id=${id}&pageNumber=${pageNumber}&itemsPerScroll=${itemsPerScroll}`, {headers: header});
  }

  getTimelinePosts(id: number, pageNumber: number, itemsPerScroll: number): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.get(`${this.baseUrl}infinite-scroll/get-posts-timeline?id=${id}&pageNumber=${pageNumber}&itemsPerScroll=${itemsPerScroll}`, {headers: header});
  }

  createNewPost(post: any): Observable<any> {
    const token = localStorage.getItem("pastebook_auth");
    const header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`
    );
    return this.http.post(`${this.baseUrl}posts/new-post`, post, {headers: header});
  }
}
