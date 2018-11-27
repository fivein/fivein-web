import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typing-progress-bar',
  templateUrl: './typing-progress-bar.component.html',
  styleUrls: ['./typing-progress-bar.component.sass']
})
export class TypingProgressBarComponent implements OnInit {
  @ViewChild('badgeContainer') badgeContainer: ElementRef;
  @ViewChild('filler') filler: ElementRef;
  @ViewChild('badge') badge: ElementRef;
  @Input() value: number;
  @Input() name: String;
  trackLength: number;
  badgeWidth: number;
  fillerLength: number;


  constructor() {
  }

  ngOnInit() {
    this.trackLength = this.badgeContainer.nativeElement.offsetWidth;
    this.badgeWidth = this.badge.nativeElement.offsetWidth;
    // this.fillerLength = (this.trackLength - this.badgeWidth); //(this.trackLength - this.badgeWidth)// * this.value / 100.0 as Number;
    this.fillerLength = (this.trackLength - this.badgeWidth) * this.value / 100.0;
    this.filler.nativeElement.style.width = String(this.fillerLength) + 'px';
    console.log(this.trackLength, this.badgeWidth, this.fillerLength, this.value);
  }
}
