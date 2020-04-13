import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteCharacters';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

	
  constructor(private storage: Storage) { }
 
  getAllFavouriteCharacters() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(charId) {
    return this.getAllFavouriteCharacters().then(result => {
      return result && result.indexOf(charId) !== -1;
    });
  }
 
  favouriteFilm(charId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        result.push(charId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [charId]);
      }
    });
  }
 
  unfavouriteFilm(charId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        var index = result.indexOf(charId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
}
