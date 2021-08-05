import { Injectable,EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  public urlGeneral = 'https://pokeapi.co/api/v2/';
  public termsGeneration = 'generation';
  public termsInfoPokemon = 'pokemon';
  public getDetailsGenerationGame = new EventEmitter();

  constructor(public httpClient: HttpClient) { }

  getGenerationGame():Observable<any>{
    return this.httpClient.get(`${this.urlGeneral}${this.termsGeneration}`);
  }

  assemblesDetailsDataGame(listGenerationGame:[]):void{
    for(let key in listGenerationGame){
      this.getDetailsDataGeneration(listGenerationGame[key]['url']).subscribe(details=>{
        this.getDetailsGenerationGame.emit(details);
      })
    }
    
  }

  getDetailsDataGeneration(url:string):Observable<any>{
    return this.httpClient.get(url);
  }

  getInfoPekemon(namePokemon:string):Observable<any>{
    return this.httpClient.get(`${this.urlGeneral}${this.termsInfoPokemon}/${namePokemon}`);
  }
  



}
