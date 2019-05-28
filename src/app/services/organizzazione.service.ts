import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organizzazione } from '../model/organizzazione';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizzazioneService {
  url = `http://localhost:6001/organizzazione`;

  constructor(private http: HttpClient) { }

  getByIdaut(id): Observable<Organizzazione[]> {
    return this.http.get<Organizzazione[]>(this.url + '/getbyidaut/'+id);
  }

  getAlltop5(): Observable<Organizzazione[]> {
    return this.http.get<Organizzazione[]>(this.url + '/getAlltop5');
  }

  gettop5byKWid(id): Observable<Organizzazione[]> {
    return this.http.get<Organizzazione[]>(this.url + '/gettop5byKWid/'+id);
  }
}
