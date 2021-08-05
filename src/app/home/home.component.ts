import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
//services
import { ActiontempleteService } from '../shared/actiontemplete.service';
import { PokeapiService } from '../shared/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listVersionsGameDetails:any = [];
  public searchGameGeneration:any = [];
  public searchActive:boolean = false;
  
  constructor(
    public actionTemplete:ActiontempleteService,
    public pokeapi:PokeapiService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.pokeapi.getGenerationGame().subscribe(list=>{
      this.pokeapi.assemblesDetailsDataGame(list.results);
      this.actionTemplete.listGenerationsGame.emit(list.results);
    })
  
    this.pokeapi.getDetailsGenerationGame.subscribe(detaislGenerationGame=>{
      this.listVersionsGameDetails.push(detaislGenerationGame);
      this.listVersionsGameDetails.sort(function(a:any, b:any){return a.id - b.id;});
    });
    this.actionTemplete.searchGenerationsGame.subscribe(searchTerm => {
      this.rederSearchUserSelect(searchTerm);
    });
    
  }

  rederSearchUserSelect(terms:string):void{
    if(terms === '0'){
      this.searchGameGeneration = [];
      this.searchActive = false;
    }else{
      for(let key in this.listVersionsGameDetails){
        if(this.listVersionsGameDetails[key].name === terms){
          this.searchGameGeneration = [this.listVersionsGameDetails[key]]
          this.searchActive = true;
          break;
        }
      }
    }
  }

  showListPokemon(game:any){
    sessionStorage.setItem('game',JSON.stringify(game));
    this.router.navigate([`listorder`]);
  }

}
