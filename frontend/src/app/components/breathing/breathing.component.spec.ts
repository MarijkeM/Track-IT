import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathingComponent } from './breathing.component';

describe('BreathingComponent', () => {
  let component: BreathingComponent;
  let fixture: ComponentFixture<BreathingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreathingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
