import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Complaint } from '../models/Complaint';
import { environment } from '../../environments/environment.developments';

@Injectable({
  providedIn: 'root'
})
export class RevisorService {
private readonly httpClient = inject(HttpClient);
private API_URL_REVISOR =`${environment.API_URL}/revisor`;

createForm(payload:Complaint){
return this.httpClient.post(this.API_URL_REVISOR,payload)
}
}
