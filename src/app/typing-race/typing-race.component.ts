import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-race',
  templateUrl: './typing-race.component.html',
  styleUrls: ['./typing-race.component.sass']
})
export class TypingRaceComponent implements OnInit {
  typingField: String = '';
  passage = 'Tongue hamburger pastrami swine. Drumstick strip steak cow pork loin beef t-bone, spare ribs bresaola landjaeger short loin tail tri-tip. Pig meatball ham, pastrami tongue boudin buffalo cow kevin sausage swine ground round salami ball tip bresaola. Corned beef buffalo meatloaf, picanha cow ball tip doner pork chop chicken kevin bresaola meatball sirloin pancetta. Capicola andouille frankfurter doner kevin bresaola pancetta cupim pig pork loin. Tongue pork pig corned beef, swine porchetta flank bacon. Ground round brisket pork chop swine meatloaf venison tail short ribs, rump strip steak corned beef picanha.'.split(/[ \n]+/).map((i, x) => [i, x]);

  constructor() { }

  ngOnInit() {
    const typingFormField = document.getElementsByClassName('typing-form-field')[0];
    const infix = typingFormField.getElementsByClassName('mat-form-field-infix')[0];
    infix.style.padding = "8px 0";
    infix.style.borderTopWidth = "8px"
  }

  clearEvent($event) {
    this.typingField = '';
  }
}
