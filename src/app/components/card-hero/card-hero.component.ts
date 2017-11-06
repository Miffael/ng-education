import { Component , Input} from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

import { Hero } from '../../hero';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css'],
})

export class CardHeroComponent {
  title: string;
  @Input() hero: Hero;

  constructor (private heroesService: HeroesService) {
    this.title = 'Detail of Hero';
  }
}
