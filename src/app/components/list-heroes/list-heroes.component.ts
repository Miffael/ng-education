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

  add(name: string): void {
    name = name.trim();
    if (name) {
      this.heroesServices.addHero({name} as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }

    this.heroesServices.getHeroues().subscribe(heroes => console.log(heroes));
  }

  delete(hero: Hero): void {

    this.heroesServices.deleteHero(hero).subscribe(
      _ => this.heroes = this.heroes.filter(h => h !== hero)
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
