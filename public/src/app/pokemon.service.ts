import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getAbilities();
  }
  // getPokemon() {
  //   console.log('in getPokemon');
  //   const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  //   bulbasaur.subscribe(data => {
  //     let str = data['name'] + '\'s abilities are ';
  //     const pokemonAbilities = [];
  //     const objects = data['abilities'];

  //     for (let i = 0; i < objects.length; i++) {
  //       pokemonAbilities.push(objects[i]['ability']);
  //       console.log('Pokemon abilities: ', pokemonAbilities);

  //       if (i !== objects.length - 2 && i !== objects.length - 1) {
  //         str += objects[i]['ability'].name + ', ';
  //       }
  //       else if (i === objects.length - 2) {
  //         str += objects[i]['ability'].name + ' and ';
  //       } else {
  //         str += objects[i]['ability'].name;
  //       }
  //     }

  //     console.log(str);

  //     console.log('Poke Abilts after ifs: ', pokemonAbilities);

  //     for (let i = 0; i < pokemonAbilities.length; i++) {
  //       let count = 0;
  //       const search = this._http.get(pokemonAbilities[i]['url']);
  //       search.subscribe(data => {
  //         for (let j = 0; j < data['pokemon'].length; j++) {
  //           const pokemon = this._http.get(data['pokemon'][j]['pokemon'].url);
  //           pokemon.subscribe(data => {
  //             for (let i = 0; i < data['abilities'].length; i++) {
  //               console.log(data['name'] + ' knows ' + data['abilities'][i]['ability'].name);
  //             }
  //           });
  //           count++;
  //         }
  //         console.log(count + ' pokemon have the ' + data['name'] + ' ability.');

  //       });

  //     }
  //   });

  getPokemon() {
    console.log('hello');
    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(poke => {
      console.log('got pokemon! ', poke);
      console.log(`this pokemon's name is ${poke['name']}!!!`);
      console.log('poke.abilities. =>', poke.abilities);
      console.log('poke["abilities"] =>', poke['abilities']);
      console.log('poke["abilities"].length =>', poke['abilities'].length);
      console.log('poke["abilities"][0].ability.name =>', poke['abilities'][0].ability.name);

      // for (let i = 0; i < poke['abilites'].length; i++) {
      //   console.log('abilities ' + poke['abilities'][i].name);
      // }
      // console.log(poke['name'] + "'s abilities are " + poke['abilities'][0].ability.name + ' and ' + poke.abilities[1].ability.name);
    });
  }
  getAbilities() {
    console.log('getAbilities() => ');
    const abilities = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    abilities.subscribe(pokeAbility => {
      console.log('got ability pokemons => ', pokeAbility);
      for (let idx = 0; idx < pokeAbility['pokemon'].length; idx++) {
        console.log('pokemons with "chlorophyll" ability =>', JSON.stringify(idx + 1) + '. ' + pokeAbility['pokemon'][idx].pokemon.name);
      }
    });
  }
}
