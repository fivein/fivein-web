import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatFormFieldControl, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { TypingRaceComponent } from './typing-race/typing-race.component';
import { TypingPassageComponent } from './typing-passage/typing-passage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypingProgressComponent } from './typing-progress/typing-progress.component';
import { TypingProgressBarComponent } from './typing-progress-bar/typing-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TypingRaceComponent,
    TypingPassageComponent,
    TypingProgressComponent,
    TypingProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
