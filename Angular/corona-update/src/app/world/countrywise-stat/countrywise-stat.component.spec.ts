import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrywiseStatComponent } from './countrywise-stat.component';

describe('CountrywiseStatComponent', () => {
  let component: CountrywiseStatComponent;
  let fixture: ComponentFixture<CountrywiseStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrywiseStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrywiseStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
