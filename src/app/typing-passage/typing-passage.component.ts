import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-typing-passage',
  templateUrl: './typing-passage.component.html',
  styleUrls: ['./typing-passage.component.sass']
})
export class TypingPassageComponent implements OnInit {
  @Input() passage: [[String, number]];
  @Input() typingField: String;
  @Output() clearField = new EventEmitter<boolean>();
  currentIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const field: String = changes.typingField.currentValue;
    if (field[field.length  - 1] !== ' ') {
      return;
    }

    if (this.passage[this.currentIndex][0] === field.trim()){
      this.typingField = '';
      this.currentIndex++;
      this.clearField.emit(true);
    }
  }
}
