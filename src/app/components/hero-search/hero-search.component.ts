import {Component, OnInit} from '@angular/core';
import {Hero} from '../../hero';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {HeroesService} from '../../services/heroes.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  searchField: string;
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroesService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
