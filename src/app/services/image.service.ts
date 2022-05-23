import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/Image';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "https://localhost:44348/";

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) { }

  uploadImages(formData: FormData, albumId: number) {    
    return this.http.post(`${this.apiUrl}images/upload-image/${albumId}`, formData)
      .subscribe(response => {
      console.log(response);
    });
  };

  uploadProfileImages(formData: FormData, albumId: number) {    
    return this.http.post(`${this.apiUrl}images/upload-profile-image/${albumId}`, formData, {reportProgress: true, observe: "events"})
  };

  uploadCoverImages(formData: FormData, albumId: number) {    
    return this.http.post(`${this.apiUrl}images/upload-profile-cover-image/${albumId}`, formData);
  };

  uploadTimelineImages(formData: FormData, albumId: number) {    
    return this.http.post(`${this.apiUrl}images/upload-timeline-image/${albumId}`, formData);
  };

  getAlbumImages(albumId: number) {
    return this.http.get<Image[]>(`${this.apiUrl}images/get-image-by-album?albumId=${albumId}`);
  }

  getImage(imageId: number) {
    return this.http.get<Image[]>(`${this.apiUrl}images/get-image?imageId=${imageId}`);
  }

  convertBase64TextString(base64string: string) {
    var imagePath = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64," + base64string);
    return imagePath;
  }
}
