import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import { ComentI } from "../models/coment.interface";
import { environment } from "../../environments/environment";


@Injectable({providedIn: 'root'})
export class ComentService {
  private readonly httpClient = inject(HttpClient);
  private API_URL_COMENT = `${environment.API_URL}/coments`;
  

  findComentS():Observable<ComentI[]> {
    return this.httpClient.get<[]>(this.API_URL_COMENT);
  }

  createComent(payload: ComentI) {
    return this.httpClient.post(this.API_URL_COMENT, payload);
  }

  updateComent(id: string, payload: ComentI):Observable<ComentI> {
    return this.httpClient.put<ComentI>(`${this.API_URL_COMENT}/${id}`, payload);
  }

  deleteComent(id: string) {
    return this.httpClient.delete(`${this.API_URL_COMENT}/${id}`);
  }

  findComentOne(id: string):Observable<ComentI> {
    return this.httpClient.get<ComentI>(`${this.API_URL_COMENT}/${id}`);
  }


  //comentarios modal

  private modalVisibility = new Subject<boolean>();

  modalVisibility$ = this.modalVisibility.asObservable();

  showModal() {
    this.modalVisibility.next(true);
  }

  hideModal() {
    this.modalVisibility.next(false);
  }


}