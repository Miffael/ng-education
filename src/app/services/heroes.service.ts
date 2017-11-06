import { Injectable } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable()

export class HeroesService {

  getHeroues(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
