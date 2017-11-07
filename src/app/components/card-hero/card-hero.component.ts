import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroesService} from '../../services/heroes.service';

import {Hero} from '../../hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css'],
})

export class CardHeroComponent implements OnInit {
  title: string;
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private heroesService: HeroesService) {
    this.title = 'Detail of Hero';
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroesService.getHero(id)
      .subscribe((hero) => {
        this.hero = hero;
      });

  }
}
