import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceStateComponent } from './race-state.component';

describe('RaceStateComponent', () => {
  let component: RaceStateComponent;
  let fixture: ComponentFixture<RaceStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
