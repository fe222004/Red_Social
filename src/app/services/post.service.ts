import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

import { Observable, catchError } from "rxjs";
import { PostI } from "../models/post.interface";
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class PostService {
  private readonly httpClient = inject(HttpClient);
  private API_URL_POST = `${environment.API_URL}/posts`;
  
  findPost():Observable<PostI[]> {
    console.log('Entro al Servidor get')
    return this.httpClient.get<PostI[]>(this.API_URL_POST);
  }

  createPost(payload: PostI) {
    console.log('Entro al Servidor Post')
    return this.httpClient.post(this.API_URL_POST, payload);
  }

  updatePost(id: string, payload: PostI): Observable<PostI> {
    console.log('Entro al Servidor Put'); // Mensaje de depuración
    return this.httpClient.put<PostI>(`${this.API_URL_POST}/${id}`, payload)
      .pipe(
        catchError(this.handleError) // Manejo de errores
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('Ocurrió un error:', error); // Registro del error
    throw new Error('Error en la solicitud HTTP'); // Lanza un error observable
  }

  deletePost(id: string) {
    console.log('Entro al Servidor Delete')
    return this.httpClient.delete(`${this.API_URL_POST}/${id}`);
  }

}