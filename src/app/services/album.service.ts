import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, CreateAlbum } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  apiUrl = "https://localhost:44348/";

  constructor(private http: HttpClient) { }

  createAlbum(body: CreateAlbum) {
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    
    return this.http.post(`${this.apiUrl}Images/CreateAlbum`, body, httpOptions).subscribe(data => {
      console.log(data);
    });
  };

  getAlbums(userAccountId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}UserAccount/GetAlbums?userAccountId=${userAccountId}`);
  }
}
