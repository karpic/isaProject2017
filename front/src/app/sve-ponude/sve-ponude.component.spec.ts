import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvePonudeComponent } from './sve-ponude.component';

describe('SvePonudeComponent', () => {
  let component: SvePonudeComponent;
  let fixture: ComponentFixture<SvePonudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvePonudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvePonudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
