import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-typing-race',
  templateUrl: './typing-race.component.html',
  styleUrls: ['./typing-race.component.sass']
})
export class TypingRaceComponent implements OnInit {
  @ViewChild('typingField') typingField: ElementRef;
  typingControl: FormControl = new FormControl();
  typingFieldPlaceholder = 'Please wait until the race begins';

  countdown: number;
  startingTime: number = Date.now() + 5 * 1000;
  timeLeft: number;

  constructor() { }

  ngOnInit(): void {
    this.styleTypingField();
    this.typingControl.disable();

    this.countdown = setInterval(() => {
      this.decrementCountdown();
    }, 50);

    setTimeout(() => {
      this.startGame();
    }, this.startingTime - Date.now());
  }

  private decrementCountdown(): void {
    let left = this.startingTime - Date.now();
    left -= left % 50;
    this.timeLeft = Math.max(left, 0);
    if (this.timeLeft <= 0) {
      clearInterval(this.countdown);
    }
  }

  private styleTypingField(): void {
    // setting top border of the input to 0
    // no simpler way than JS
    const nativeElement = this.typingField.nativeElement;
    const wrapper = nativeElement.closest('.mat-form-field-infix');
    wrapper.style.borderTopWidth = 0;
  }

  private startGame(): void {
    // start game sequence
    this.typingFieldPlaceholder = 'Lights out and away we go!';
    this.typingControl.enable();
    this.typingField.nativeElement.focus();
  }
}
