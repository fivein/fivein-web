import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PassageService } from '../passage.service';
import { MatFormFieldControl } from '@angular/material';
import { FormControl } from '@angular/forms';

function sleep(ms: Number) {
  return new Promise(resolve => setTimeout(resolve, ms as number));
}

@Component({
  selector: 'app-typing-race',
  templateUrl: './typing-race.component.html',
  styleUrls: ['./typing-race.component.sass']
})
export class TypingRaceComponent implements OnInit {
  @ViewChild('typingField') typingField: ElementRef;
  typingFieldControl: FormControl = new FormControl('');
  typingFieldPlaceholder: String = 'Please wait until the race begins';

  passage: String = '';

  constructor(private passageService: PassageService) {
  }

  private static styleTypingField() {
    const typingFormField = document.getElementsByClassName('typing-form-field')[0];
    const infix = typingFormField.getElementsByClassName('mat-form-field-infix')[0] as HTMLElement;
    infix.style.borderTopWidth = '8px';
    infix.style.padding = '8px 0';
  }

  ngOnInit() {
    TypingRaceComponent.styleTypingField();
    this.typingFieldControl.disable();
    this.getPassage();

    // TODO: change this
    setTimeout(() => {
      this.startGame();
    }, 2000);
  }

  getPassage() {
    this.passage = this.passageService.getPassage();
  }

  startGame() {
    this.typingFieldPlaceholder = 'Lights out and away we go!';
    this.typingFieldControl.enable();
    this.typingField.nativeElement.focus();
  }
}
