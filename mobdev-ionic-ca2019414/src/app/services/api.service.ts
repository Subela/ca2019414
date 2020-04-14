import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCharacters() {
        return this.http.get('https://breakingbadapi.com/api/characters');
    }

    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/char_id/${id}`);
    }
}