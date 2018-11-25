import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';

@Component({
  selector: 'app-typing-passage',
  templateUrl: './typing-passage.component.html',
  styleUrls: ['./typing-passage.component.sass']
})
export class TypingPassageComponent implements OnInit {
  passage: String = 'Tongue hamburger pastrami swine. Drumstick strip steak cow pork loin beef t-bone, spare ribs bresaola landjaeger short loin tail tri-tip. Pig meatball ham, pastrami tongue boudin buffalo cow kevin sausage swine ground round salami ball tip bresaola. Corned beef buffalo meatloaf, picanha cow ball tip doner pork chop chicken kevin bresaola meatball sirloin pancetta. Capicola andouille frankfurter doner kevin bresaola pancetta cupim pig pork loin. Tongue pork pig corned beef, swine porchetta flank bacon. Ground round brisket pork chop swine meatloaf venison tail short ribs, rump strip steak corned beef picanha.'
  constructor() { }

  ngOnInit() {
  }
}
