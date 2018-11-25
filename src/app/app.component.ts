import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fivein-web';

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('mat-app-background');
  }
}
