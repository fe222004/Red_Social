import {APP_ID, inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { ComentI } from "../models/coment.interface";

@Injectable({providedIn: 'root'})
export class ComentService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl: string = 'http://localhost:3000/coment';

  
  private comments: string[] = [
    'Comentario 1',
    'Comentario 2',
    'Comentario 3',
    'Comentario 4',
    'Comentario 5'
  ];

  findComentS():Observable<ComentI[]> {
    return this.httpClient.get<[]>(this.apiUrl);
  }

  createComent(payload: ComentI) {
    return this.httpClient.post(this.apiUrl, payload);
  }

  updateComent(id: string, payload: ComentI):Observable<ComentI> {
    return this.httpClient.put<ComentI>(`${this.apiUrl}/${id}`, payload);
  }

  deleteComent(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  findComentOne(id: string):Observable<ComentI> {
    return this.httpClient.get<ComentI>(`${this.apiUrl}/${id}`);
  }

  getComments(): string[] {
    return this.comments;
  }
}