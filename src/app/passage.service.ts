import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassageService {
  // defaultPassage: String = 'Bacon ipsum dolor amet kevin frankfurter biltong, pastrami chuck ribeye beef ribs burgdoggen.'
  //   + ' Bacon porchetta doner, ham hock bresaola pastrami spare ribs.'
  //   + ' Doner turkey tongue, chicken spare ribs shankle ribeye cupim t-bone shank. Turkey filet mignon spare ribs fatback.'
  //   + ' Ground round cupim swine pork kevin. Meatloaf alcatra meatball picanha jerky, pancetta venison.'
  //   + '\n' + 'Doner venison sirloin, leberkas pork belly ham jerky andouille kielbasa boudin.'
  //   + ' Brisket jerky fatback, kevin buffalo short loin boudin prosciutto leberkas picanha andouille tri-tip.'
  //   + ' Cupim strip steak capicola ground round swine.'
  //   + ' Tri-tip sirloin biltong cow filet mignon landjaeger tail capicola pastrami shoulder t-bone strip steak ham shankle.'
  //   + ' Shank tail pancetta porchetta.';

  defaultPassage: String = ' is a period of civil war.'
    + ' Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.'
    + ' During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon.';

  constructor() { }

  getDefaultPassage() {
    return this.defaultPassage;
  }

  getPassage(): String {
    return this.getDefaultPassage();
  }
}
