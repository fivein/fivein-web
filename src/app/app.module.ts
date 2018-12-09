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
import { MaterialModule } from "./material/material.module";
import { TypingRaceComponent } from './typing-race/typing-race.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavMobileComponent,
    NavDesktopComponent,
    LoremIpsumComponent,
    DashboardComponent,
    TypingRaceComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
