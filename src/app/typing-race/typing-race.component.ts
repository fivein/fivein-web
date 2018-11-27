import { Component, OnInit } from '@angular/core';
import { PassageService } from '../passage.service';

@Component({
  selector: 'app-typing-race',
  templateUrl: './typing-race.component.html',
  styleUrls: ['./typing-race.component.sass']
})
export class TypingRaceComponent implements OnInit {
  typingField: String = '';
  passage: String = '';

  constructor(private passageService: PassageService) { }

  private static styleTypingField() {
    const typingFormField = document.getElementsByClassName('typing-form-field')[0];
    const infix = typingFormField.getElementsByClassName('mat-form-field-infix')[0] as HTMLElement;
    infix.style.borderTopWidth = '8px';
    infix.style.padding = '8px 0';
  }

  ngOnInit() {
    TypingRaceComponent.styleTypingField();
    this.getPassage();
  }

  getPassage() {
    this.passage = this.passageService.getPassage();
  }

  typingFieldOnUpdate(value: String): void {
    return;
  }
}
