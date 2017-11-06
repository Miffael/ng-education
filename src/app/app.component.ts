import { Component, OnInit } from '@angular/core';
import { HeroesService} from './services/heroes.service';

import { Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  selectedHero: Hero;
  heroes: Hero[];

  constructor (private heroesServices: HeroesService) {
    this.title = 'Heroes list';

    this.selectedHero = {
      id:0,
      name: '',
    };
  }

  getHeroues(): void {
    this.heroesServices.getHeroues().then(heroes => this.heroes = heroes);
  }

  selectHero(hero:Hero) {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroues();
  }

}
