import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  baseUrl = "https://localhost:44348/";
  constructor(
    private http: HttpClient
  ) { }
  
  getAllNotification(userId: number){
    
  }

}
