import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaHomeComponent } from './india-home.component';

describe('IndiaHomeComponent', () => {
  let component: IndiaHomeComponent;
  let fixture: ComponentFixture<IndiaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
