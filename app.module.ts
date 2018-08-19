import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JokeComponent} from './app.JokeComponent'
import {JokeListComponent} from './app.jokeListComponent'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,JokeComponent, JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
