import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceProgressBarComponent } from './race-progress-bar.component';

describe('RaceProgressBarComponent', () => {
  let component: RaceProgressBarComponent;
  let fixture: ComponentFixture<RaceProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
