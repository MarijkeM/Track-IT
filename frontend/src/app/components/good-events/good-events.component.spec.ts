import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodEventsComponent } from './good-events.component';

describe('GoodEventsComponent', () => {
  let component: GoodEventsComponent;
  let fixture: ComponentFixture<GoodEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
