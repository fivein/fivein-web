import { Component, Input, OnInit} from '@angular/core';
import { PassageService } from '../passage.service';

@Component({
  selector: 'app-typing-passage',
  templateUrl: './typing-passage.component.html',
  styleUrls: ['./typing-passage.component.sass']
})
export class TypingPassageComponent implements OnInit {
  @Input() passage: String;

  constructor(private passageService: PassageService) {
  }

  ngOnInit() {
  }
}
