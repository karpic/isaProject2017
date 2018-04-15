import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rezervacija2Component } from './rezervacija2.component';

describe('Rezervacija2Component', () => {
  let component: Rezervacija2Component;
  let fixture: ComponentFixture<Rezervacija2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rezervacija2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rezervacija2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
