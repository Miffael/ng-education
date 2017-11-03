import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatListModule, MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { ListHeroComponent } from './components/list-hero/list-hero.component';

const MatModules = [
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    CardHeroComponent,
    ListHeroComponent,
  ],
  imports: [
    ...MatModules,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
