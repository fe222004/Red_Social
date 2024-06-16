import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl: string = 'http://localhost:3000/country';
  
  constructor() { }


}
