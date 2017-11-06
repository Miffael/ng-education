import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Hero} from '../../app.component';

// console.log(AppComponent)

const HEROES = new AppComponent().heroes;

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css'],
})

export class ListHeroComponent {
  title = 'Heroes list';
  heroes = HEROES;
}
