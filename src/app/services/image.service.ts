import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "https://localhost:44348/";

  constructor(private http: HttpClient) { }

  uploadImages(formData: FormData, albumId: number) {    
    return this.http.post(`${this.apiUrl}/images/upload-image/${albumId}`, formData)
      .subscribe(response => {
      console.log(response);
    });
  };

  getAlbumImages(albumId: number) {
    return this.http.get<Image[]>(`${this.apiUrl}images/get-image-by-album?albumId=${albumId}`);
  }

  getImage(imageId: number) {
    return this.http.get<Image[]>(`${this.apiUrl}images/get-image?imageId=${imageId}`);
  }
}
