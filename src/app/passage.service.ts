import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PassageService {
  private static defaultPassage = 'After water, protein is the most plentiful substance in our '
    + 'body; it is an integral part of every living cell. In foods, protein usually comes '
    + 'packaged with fat, and the type of fat determines how "healthy" a protein source is.';

  constructor() {
  }

  public requestPassage() {
    return PassageService.defaultPassage;
  }
}
