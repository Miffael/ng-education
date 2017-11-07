import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.components.html',
  styleUrls: ['./top-menu.components.css']
})

export class TopMenuComponents {
  title: string;
  links: object[];

  constructor(private router: Router) {
    this.title = 'Tour of Heroes';

    this.links = [
      {
        name: 'Dashboard',
        url: '/dashboard'
      },
      {
        name: 'Heroes',
        url: '/heroes',
      }
    ];
  }
}
