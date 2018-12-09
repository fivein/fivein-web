import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { TypingRaceComponent } from "./typing-race/typing-race.component";

const routes: Routes = [
  { path: '', component: LoremIpsumComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'typing', component: TypingRaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
