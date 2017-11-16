import {Component, OnInit} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';

import {Hero} from '../../hero';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})

export class ListHeroesComponent implements OnInit {
  title: string;
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroesServices: HeroesService) {
    this.title = 'Heroes list';

    this.selectedHero = {
      id: 0,
      name: '',
    };
  }

  getHeroes(): void {
    this.heroesServices.getHeroues().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
