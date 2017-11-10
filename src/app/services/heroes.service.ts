import {Injectable} from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Injectable()

export class HeroesService {

  getHeroues(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroues()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
