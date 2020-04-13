import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }
 
  getFilms() {
    return this.http.get('https://breakingbadapi.com/');
  }
 
  getFilm(id) {
    return this.http.get(`https://breakingbadapi.com/characters/${id}`);
  }
}