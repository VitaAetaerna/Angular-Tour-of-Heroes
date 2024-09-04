import { Component } from '@angular/core';
import {Hero} from "../hero";
import {NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../mock-Heroes";
import {NgFor} from "@angular/common";
import {HeroDetailComponentComponent} from "../hero-detail-component/hero-detail-component.component";
import {HeroService} from "../hero.service";
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponentComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.MessagesService.clear();
    this.MessagesService.add(this.selectedHero.name + " selected");

  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private MessagesService: MessagesService) {
  }
}
