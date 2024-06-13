import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { PostI } from "../models/post.interface";

@Injectable({providedIn: 'root'})
export class PostService {
  private readonly httpClient = inject(HttpClient);
  private API_URL_POST = `${environment.API_URL}/post`;
  
  findPost():Observable<PostI[]> {
    return this.httpClient.get<[]>(this.API_URL_POST);
  }

  createPost(payload: PostI) {
    return this.httpClient.post(this.API_URL_POST, payload);
  }

  updatePost(id: string, payload: PostI):Observable<PostI> {
    return this.httpClient.put<PostI>(`${this.API_URL_POST}/${id}`, payload);
  }

  deletePost(id: string) {
    return this.httpClient.delete(`${this.API_URL_POST}/${id}`);
  }

}