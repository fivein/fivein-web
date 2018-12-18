import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { TypingRaceComponent } from './typing-race/typing-race.component';
import { PassageComponent } from './passage/passage.component';
import { RaceStateComponent } from './race-state/race-state.component';
import { RaceProgressBarComponent } from './race-progress-bar/race-progress-bar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavMobileComponent,
    NavDesktopComponent,
    LoremIpsumComponent,
    DashboardComponent,
    TypingRaceComponent,
    PassageComponent,
    RaceStateComponent,
    RaceProgressBarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
