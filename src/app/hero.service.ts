import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-Heroes";
import {Observable, of} from "rxjs";
import {MessagesService} from "./messages.service";
import {HeroesComponent} from "./heroes/heroes.component";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messagesService.add("HeroService: Heroes Fetched")
    return heroes;
  }

  constructor(private messagesService: MessagesService) { }
}
