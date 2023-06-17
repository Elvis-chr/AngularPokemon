import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private API_PERSONAJES = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  public getAllPersonajes():Observable<any>{
    return this.http.get(this.API_PERSONAJES)
  }
}
