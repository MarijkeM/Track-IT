import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeThoughtComponent } from './challenge-thought.component';

describe('ChallengeThoughtComponent', () => {
  let component: ChallengeThoughtComponent;
  let fixture: ComponentFixture<ChallengeThoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeThoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
