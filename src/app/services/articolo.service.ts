import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo } from '../model/articolo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Presentein } from '../model/presentein';

const headers = new HttpHeaders({'Content-Type' : 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {
  url = `http://localhost:6001/articolo`;

  constructor(private http: HttpClient) { }

  getByKW(id: number): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getbykwVE/'+ id);
  }

  getAll(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getAllVE');
  }

  getById(id: number): Observable<Articolo> {
    return this.http.get<Articolo>(this.url + '/getbyid/'+ id);
  }

  getlinks(id: number): Observable<Presentein[]> {
    return this.http.get<Presentein[]>(this.url + '/getlinks/'+ id);
  }
  
  getrefs(id: number): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getreferences/'+ id);
  }

  getbyidaut(id: number): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getbyidaut/'+ id);
  }

  getAllArtPerAnno(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getAllartanno');
  }

  getArtPerAnnobyKW(id): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getartannobyidkw/'+ id);
  }

  getAllArtPerRepo(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getAllartrepo');
  }

  getArtPerRepobyKW(id): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getartrepobyidkw/'+ id);
  }

  getAvgRefsbyKW(id): Observable<number> {
    return this.http.get<number>(this.url + '/getavgrefsidkw/'+ id);
  }

  getAllAvgRefs(): Observable<number> {
    return this.http.get<number>(this.url + '/getAllavgrefs');
  }

  getCountArtByautId(id): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.url + '/getcountartbyautid/'+id);
  }
}
