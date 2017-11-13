import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSidenavModule,
  MatFormFieldModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {TopMenuComponents} from './components/top-menu/top-menu.components';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CardHeroComponent} from './components/card-hero/card-hero.component';
import {ListHeroesComponent} from './components/list-heroes/list-heroes.component';
import {MessagesComponent} from './components/messages/messages.component';

import {HeroesService} from './services/heroes.service';
import {MessageService} from './services/message.service';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';


const MatModules = [
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponents,
    DashboardComponent,
    CardHeroComponent,
    ListHeroesComponent,
    MessagesComponent,
    HeroSearchComponent,
  ],
  imports: [
    ...MatModules,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [HeroesService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
