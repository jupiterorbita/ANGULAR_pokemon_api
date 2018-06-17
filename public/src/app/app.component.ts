import { PokemonService } from './pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POKEMON';
  constructor(private _pokemonService: PokemonService) {

  }
}
