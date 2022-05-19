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
    
    return this.http.post(`${this.apiUrl}albums/create-album`, body, httpOptions).subscribe(response => {
      console.log(response);
    });
  };

  getAlbums(userAccountId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}albums/get-albums?userAccountId=${userAccountId}`);
  }

  getAlbum(albumId: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}albums/get-album?albumId=${albumId}`);
  }
}
