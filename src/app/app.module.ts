import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChessDiagram } from './chess-diagram/chess-diagram.component';



@NgModule({
  declarations: [
    AppComponent,
    ChessDiagram
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,ChessDiagram]
})
export class AppModule { }
