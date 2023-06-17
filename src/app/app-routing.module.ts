import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunPokemonComponent } from './albun-pokemon/albun-pokemon.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'albunPokemon', component: AlbunPokemonComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
