import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rezervacija3Component } from './rezervacija3.component';

describe('Rezervacija3Component', () => {
  let component: Rezervacija3Component;
  let fixture: ComponentFixture<Rezervacija3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rezervacija3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rezervacija3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
