import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  //create function (used in app.component.html)
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero, "selected hero");
  }
  //create function (called in ngOnInit)
  getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) {

  }
}
