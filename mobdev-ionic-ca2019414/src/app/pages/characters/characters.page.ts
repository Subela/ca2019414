import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.characters = this.api.getCharacters();
  }

  openDetails(character) {
    let split = character.url.split('/');
    let charId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/characters/${charId}`);
  }
}