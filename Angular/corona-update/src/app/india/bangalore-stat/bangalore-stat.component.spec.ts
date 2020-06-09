import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangaloreStatComponent } from './bangalore-stat.component';

describe('BangaloreStatComponent', () => {
  let component: BangaloreStatComponent;
  let fixture: ComponentFixture<BangaloreStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangaloreStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangaloreStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
