import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionSourceComponent } from './transmission-source.component';

describe('TransmissionSourceComponent', () => {
  let component: TransmissionSourceComponent;
  let fixture: ComponentFixture<TransmissionSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmissionSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
