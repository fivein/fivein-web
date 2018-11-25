import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCard, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { TypingRaceComponent } from './typing-race/typing-race.component';
import { TypingPassageComponent } from './typing-passage/typing-passage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TypingRaceComponent,
    TypingPassageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
