import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { PostI } from "../models/post.interface";

@Injectable({providedIn: 'root'})
export class PostService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl: string = 'http://localhost:3000/post';

  
  findPost():Observable<PostI[]> {
    return this.httpClient.get<[]>(this.apiUrl);
  } 

  createPost(payload: PostI) {
    return this.httpClient.post(this.apiUrl, payload);
  }

  updatePost(id: string, payload: PostI):Observable<PostI> {
    return this.httpClient.put<PostI>(`${this.apiUrl}/${id}`, payload);
  }

  deletePost(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}