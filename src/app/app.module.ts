import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSidenavModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { TopMenuComponents } from './components/top-menu/top-menu.components';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';

import { HeroesService } from './services/heroes.service';

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
  ],
  imports: [
    ...MatModules,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
