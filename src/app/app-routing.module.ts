import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypingRaceComponent } from './typing-race/typing-race.component';

const routes: Routes = [
  { path: '', redirectTo: '/typing', pathMatch: 'full' },
  { path: 'typing', component: TypingRaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
