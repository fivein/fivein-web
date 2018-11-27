import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingProgressComponent } from './typing-progress.component';

describe('TypingProgressComponent', () => {
  let component: TypingProgressComponent;
  let fixture: ComponentFixture<TypingProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
