import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StoryI } from '../models/story';

@Injectable({providedIn: 'root'})
export class StoryService {
    private readonly httpClient = inject(HttpClient);
    private API_URL_STORY = `${environment.API_URL}/stories`;

    findStory():Observable<StoryI[]>{
        return this.httpClient.get<StoryI[]>(this.API_URL_STORY);
    }

    updateStory(id: string, playload: StoryI):Observable<StoryI>{
        return this.httpClient.put<StoryI>(`${this.API_URL_STORY}/${id}`, playload);    
    }

    findStoryOne(id:string):Observable<StoryI>{
        return this.httpClient.get<StoryI>(`${this.API_URL_STORY}/${id}`);
    }


}
