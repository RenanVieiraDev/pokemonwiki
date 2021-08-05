import { Component, OnInit, ViewChild } from '@angular/core';

//services
import { ActiontempleteService } from '../shared/actiontemplete.service';
import { PokeapiService } from '../shared/pokeapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('searchSelectGameSm') searchInputSm:any;
  @ViewChild('searchSelectGameLg') searchInputLg:any;


  public listOptionsGenerationsGame = [];

  constructor(
    public actionTemplete:ActiontempleteService,
    public pokeapi:PokeapiService
  ) { }

  ngOnInit(): void {
    this.actionTemplete.listGenerationsGame.subscribe(listGeneration=>{
      this.listOptionsGenerationsGame = listGeneration;
    });
  }

  searchGame(screen:string):void{
    if(screen === 'sm'){
      this.actionTemplete.searchGame(this.searchInputSm.nativeElement.value);
    }else{
      this.actionTemplete.searchGame(this.searchInputLg.nativeElement.value);
    }
  }

}
