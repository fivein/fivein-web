import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingRaceComponent } from './typing-race.component';

describe('TypingRaceComponent', () => {
  let component: TypingRaceComponent;
  let fixture: ComponentFixture<TypingRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
