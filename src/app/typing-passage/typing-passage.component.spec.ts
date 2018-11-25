import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingPassageComponent } from './typing-passage.component';

describe('TypingPassageComponent', () => {
  let component: TypingPassageComponent;
  let fixture: ComponentFixture<TypingPassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingPassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingPassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
