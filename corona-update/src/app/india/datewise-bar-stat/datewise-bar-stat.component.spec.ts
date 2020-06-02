import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseBarStatComponent } from './datewise-bar-stat.component';

describe('DatewiseBarStatComponent', () => {
  let component: DatewiseBarStatComponent;
  let fixture: ComponentFixture<DatewiseBarStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatewiseBarStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseBarStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
