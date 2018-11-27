import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-progress-bar',
  templateUrl: './typing-progress-bar.component.html',
  styleUrls: ['./typing-progress-bar.component.sass']
})
export class TypingProgressBarComponent implements OnInit {
  @Input() value: Number;
  @Input() prediction: Number;

  constructor() { }

  ngOnInit() {
  }
}
