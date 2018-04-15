import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rezervacija4Component } from './rezervacija4.component';

describe('Rezervacija4Component', () => {
  let component: Rezervacija4Component;
  let fixture: ComponentFixture<Rezervacija4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rezervacija4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rezervacija4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
