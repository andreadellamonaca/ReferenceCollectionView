import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Keyword} from '../model/keyword';

const headers = new HttpHeaders({'Content-Type' : 'application/json'});


@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  url = `http://localhost:6001/keyword`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(this.url + '/getAll');
  }

  getByidart(id: number): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(this.url + '/getbyidart/'+id);
  }

  gettop5KWbyidKW(id: number): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(this.url + '/gettop5kwbyKWid/'+id);
  }

  getAlltop5KW(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(this.url + '/getAlltop5');
  }

}
