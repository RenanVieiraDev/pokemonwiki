import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiontempleteService {

  public listGenerationsGame = new EventEmitter();
  public searchGenerationsGame = new EventEmitter();
  
  constructor() { }

  searchGame(gameGeneration:string):void{
    this.searchGenerationsGame.emit(gameGeneration);
  }
  
}
