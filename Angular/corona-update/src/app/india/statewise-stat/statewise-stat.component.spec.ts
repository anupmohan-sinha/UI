import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseStatComponent } from './statewise-stat.component';

describe('StatewiseStatComponent', () => {
  let component: StatewiseStatComponent;
  let fixture: ComponentFixture<StatewiseStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatewiseStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatewiseStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
