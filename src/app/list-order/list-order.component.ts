import { Component, OnInit } from '@angular/core';

import { PokeapiService } from '../shared/pokeapi.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  public gameData:any = null;
  public listPokemons:any = [];

  constructor(public pokerapi:PokeapiService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('game')){
      this.getListPokemons(JSON.parse(`${sessionStorage.getItem('game')}`));
    }
  }

  getListPokemons(game:any):void{
    for(let key in game.pokemon_species){
      this.pokerapi.getInfoPekemon(game.pokemon_species[key].name)
      .subscribe(pokemon=>{this.listPokemons.push(pokemon)})
    }
  }


}
