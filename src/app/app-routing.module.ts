import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CardHeroComponent} from './components/card-hero/card-hero.component';
import {ListHeroesComponent} from './components/list-heroes/list-heroes.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: ListHeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: CardHeroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
