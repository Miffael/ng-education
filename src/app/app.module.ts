import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';

import { HeroesService } from './services/heroes.service';

const MatModules = [
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    CardHeroComponent,
  ],
  imports: [
    ...MatModules,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
