import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-race-progress-bar',
  templateUrl: './race-progress-bar.component.html',
  styleUrls: ['./race-progress-bar.component.sass']
})
export class RaceProgressBarComponent implements OnInit {
  @Input() value: number;
  @Input() name: string;
  @Input() color: string = 'warn';

  constructor() { }

  ngOnInit() {
  }
}
