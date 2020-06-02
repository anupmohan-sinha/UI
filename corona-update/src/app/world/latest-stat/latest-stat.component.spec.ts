import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestStatComponent } from './latest-stat.component';

describe('LatestStatComponent', () => {
  let component: LatestStatComponent;
  let fixture: ComponentFixture<LatestStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
