import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';


@Component({
  selector: 'app-albun-pokemon',
  templateUrl: './albun-pokemon.component.html',
  styleUrls: ['./albun-pokemon.component.scss']
})
export class AlbunPokemonComponent implements OnInit {
  personajes: any = [];

  constructor(private service: PersonajesService) { }

  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe(resp => {
      this.personajes = resp.results;
      console.log(this.personajes);
    });
  }

}
