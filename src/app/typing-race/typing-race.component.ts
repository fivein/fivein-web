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

  constructor() { }

  ngOnInit() {
    this.styleTypingField();
    this.typingControl.disable();
    setTimeout(() => {
      this.startGame();
    }, 2000);
  }

  private styleTypingField() {
    // setting top border of the input to 0
    // no simpler way than js.
    const nativeElement = this.typingField.nativeElement;
    const wrapper = nativeElement.closest('.mat-form-field-infix');
    wrapper.style.borderTopWidth = 0;
  }

  private startGame() {
    this.typingFieldPlaceholder = 'Lights out and away we go!';
    this.typingControl.enable();
    this.typingField.nativeElement.focus();
  }
}
