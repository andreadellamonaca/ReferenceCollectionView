import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Autore } from '../model/autore';

@Injectable({
  providedIn: 'root'
})
export class AutoreService {
  url = `http://localhost:6001/autore`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.url + '/getAll');
  }

  getByKW(id): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.url + '/getbykwVE/'+id);
  }

  getByIdart(id): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.url + '/getbyidart/'+id);
  }

  getById(id): Observable<Autore> {
    return this.http.get<Autore>(this.url + '/getbyid/'+id);
  }

  getcoautore(id): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.url + '/getcoautori/'+id);
  }

  getavgcoautorebykwid(id): Observable<number> {
    return this.http.get<number>(this.url + '/getavgcoautoribykwid/'+id);
  }

  getAllavgcoautore(): Observable<number> {
    return this.http.get<number>(this.url + '/getAllavgcoautori');
  }

  getAlltop5(): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.url + '/getAlltop5');
  }

  gettop5byKWid(id): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.url + '/gettop5bykwid/'+id);
  }

  gettop5coaut(id): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.url + '/gettop5coaut/'+id);
  }

}
