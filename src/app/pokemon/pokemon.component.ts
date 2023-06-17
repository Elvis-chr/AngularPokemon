import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  name! : string;
  urlImg! : string;
  namePokemon! : string;
  tamanoPokemon! : string; 
  
 /*  model = {
    name: '',
    urlImg: '',
    namePokemon: '',
    tamanoPokemon: ''
  } */

  constructor( private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  searchPokemon(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any) =>{
      this.urlImg = data.sprites.front_shiny;
      this.namePokemon = data.name;
      this.tamanoPokemon = data.weight;
    
    
    });
   
  }

}
