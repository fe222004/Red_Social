import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryI } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) {}

  createStory(formData: FormData): Observable<StoryI> {
    return this.http.post<StoryI>(`${this.apiUrl}/stories`, formData);
  }

  getStories(): Observable<StoryI[]> {
    return this.http.get<StoryI[]>(`${this.apiUrl}/stories`);
  }

  getStoriesForUser(userId: string): Observable<StoryI[]> {
    return this.http.get<StoryI[]>(`${this.apiUrl}/stories/user/${userId}`);
  }

  getStoriesForUserAndFriends(userId: string): Observable<StoryI[]> {
    return this.http.get<StoryI[]>(`${this.apiUrl}/stories/user/${userId}/friends`);
  }
}
